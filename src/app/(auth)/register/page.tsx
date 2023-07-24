"use client"

import { useMemo, useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import {
  createUserWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
} from "@firebase/auth"
import { auth, provider } from "@/config/firebase-config"

import Button from "@/components/atoms/Button"
import PrivacyPolicyFooter from "@/components/atoms/PrivacyPoliceFooter"
import Divider from "@/components/atoms/Divider"
import SocialLoginButton from "@/components/atoms/SocialLoginButton"
import Input from "@/components/molecules/Input"
import Checkbox from "@/components/molecules/Checkbox"
import Snackbar from "@/components/molecules/Snackbar"
import AuthHeader from "@/components/molecules/AuthHeader"

const schema = yup
  .object({
    email: yup.string().required("Required field"),
    password: yup
      .string()
      .required("Required field")
      .min(6, "Password is too short - should be 6 chars minimum"),
    confirmPassword: yup
      .string()
      .required("Required field")
      .oneOf([yup.ref("password")], "Passwords must match"),
    agreeWithTerms: yup.boolean().required().isTrue(),
  })
  .required()

type FormData = yup.InferType<typeof schema>

export default function Register() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const [termsErrorOpen, setTermsErrorOpen] = useState(false)
  const [userSuccessOpen, setUserSuccessOpen] = useState(false)

  const inputVariant = useMemo(
    () => (isSubmitted ? "error" : "warning"),
    [isSubmitted]
  )

  const fetchLogin = useCallback(
    async (userCredential) => {
      if (!userCredential) return

      await fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCredential.user.getIdToken()}`,
        },
      }).then((response) => {
        if (response.status === 200) {
          router.push("/dashboard")
        }
      })
    },
    [router]
  )

  useEffect(() => {
    setTermsErrorOpen(Boolean(errors.agreeWithTerms))
  }, [errors.agreeWithTerms])

  useEffect(() => {
    getRedirectResult(auth).then(fetchLogin)
  }, [fetchLogin])

  const onSubmit: SubmitHandler<FormData> = async ({ email, password }) => {
    await createUserWithEmailAndPassword(auth, email, password).then(fetchLogin)

    setUserSuccessOpen(true)
  }

  const signInWithGoogle = async () => {
    await signInWithRedirect(auth, provider)
  }

  const handleUserSuccessClose = () => {
    setUserSuccessOpen(false)
    router.push("/login")
  }

  return (
    <>
      <Snackbar
        variant="warning"
        open={termsErrorOpen}
        onClose={() => setTermsErrorOpen(false)}
        autoHideDuration={4000}
      >
        <span className=" text-noble-black-0">{"Must agree with "}</span>
        <span className="text-body-s-semibold">{"Terms and Conditions "}</span>
        <span className="text-noble-black-0">{"to continue."}</span>
      </Snackbar>
      <Snackbar
        variant="success"
        open={userSuccessOpen}
        onClose={handleUserSuccessClose}
        autoHideDuration={4000}
      >
        <span className="text-body-s-semibold">{"Success! "}</span>
        <span className="text-noble-black-0">{"User has been created."}</span>
      </Snackbar>
      <div className="col-span-7 flex h-full min-h-screen flex-col justify-between">
        <AuthHeader showLoginLink />
        <div className="mx-28 mb-32">
          <p className="text-heading-xl-regular text-noble-black-0">
            Connect with your team and bring your creative ideas to life.
          </p>
          <form className="mt-16 space-y-12" onSubmit={handleSubmit(onSubmit)}>
            <SocialLoginButton
              type="button"
              onClick={signInWithGoogle}
              label="Sign up with Google"
              icon="google"
            />
            <Divider>or continue with e-mail</Divider>
            <div className="grid grid-cols-2 grid-rows-2 gap-6">
              <div className="col-span-2">
                <Input
                  label="E-mail"
                  placeholder="E-mail"
                  autoComplete="email"
                  variant={errors.email && inputVariant}
                  hint={errors.email?.message}
                  {...register("email")}
                />
              </div>
              <Input
                type="password"
                label="Password"
                placeholder="Password"
                autoComplete="new-password"
                variant={errors.password && inputVariant}
                hint={errors.password?.message}
                {...register("password")}
              />
              <Input
                type="password"
                label="Repeat password"
                placeholder="Repeat password"
                autoComplete="new-password"
                variant={errors.confirmPassword && inputVariant}
                hint={errors.confirmPassword?.message}
                {...register("confirmPassword")}
              />
            </div>
            <Checkbox {...register("agreeWithTerms")}>
              {"I agree with "}
              <Link
                href="/register"
                className="bg-blue-green-500 bg-clip-text text-body-l-semibold text-transparent"
              >
                Terms and conditions
              </Link>
            </Checkbox>
            <Button type="submit" label="Create free account" size="large" />
          </form>
        </div>
        <PrivacyPolicyFooter />
      </div>
    </>
  )
}
