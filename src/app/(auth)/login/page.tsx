"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from "react-hook-form"

import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
} from "@firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { auth, db, provider } from "@/config/firebase-config"

import sideImage from "@/assets/images/illustrations-abstract-01.png"

import Button from "@/components/atoms/Button"
import SocialLoginButton from "@/components/atoms/SocialLoginButton"
import Input from "@/components/molecules/Input"
import Checkbox from "@/components/molecules/Checkbox"
import AuthHeader from "@/components/molecules/AuthHeader"
import Divider from "@/components/atoms/Divider"

const schema = yup
  .object({
    email: yup.string().required("Required field"),
    password: yup.string().required("Required field"),
  })
  .required()

type FormData = yup.InferType<typeof schema>

export default function Login() {
  const router = useRouter()
  const [isSending, setIsSending] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const inputVariant = useMemo(
    () => (isSubmitted ? "error" : "warning"),
    [isSubmitted]
  )

  const fetchUser = useCallback(async (uid) => {
    const docRef = doc(db, "users", uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data()
    }
  }, [])

  const postLogin = useCallback(
    async (userCredential: any) => {
      if (!userCredential) return

      setIsSending(true)

      await fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCredential.user.getIdToken()}`,
        },
      }).then(async (response) => {
        if (response.status === 200) {
          const userUid = await userCredential.user.uid
          const userData = await fetchUser(userUid)

          if (userData?.currWorkspaceId && userData?.currProjectId) {
            router.push(
              `/${userData.currWorkspaceId}/${userData.currProjectId}`
            )
          } else {
            router.push("/")
          }
        }
      })

      setIsSending(false)
    },
    [router, fetchUser]
  )

  useEffect(() => {
    getRedirectResult(auth).then(postLogin)
  }, [postLogin])

  const onSubmit: SubmitHandler<FormData> = async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password).then(postLogin)
  }

  const signInWithGoogle = async () => {
    await signInWithRedirect(auth, provider)
  }

  return (
    <main className="container grid xl:grid-cols-2">
      <div className="flex h-full min-h-screen flex-col justify-between">
        <AuthHeader />
        <div className="mx-auto mb-24 w-full max-w-md px-4 sm:mx-24 sm:mb-28 sm:w-auto sm:max-w-none md:mx-28 md:mb-32">
          <div className="space-y-6">
            <p className="text-heading-m-regular text-noble-black-0 sm:text-heading-l-regular md:text-heading-xl-regular">
              {"Let's get "}
              <span className="bg-day-blue-blue-green-500 bg-clip-text text-heading-m-bold text-transparent sm:text-heading-l-bold md:text-heading-xl-bold">
                creative!
              </span>
            </p>
            <p className="text-body-m-medium text-noble-black-300 sm:text-body-l-medium md:text-body-xl-medium">
              Log in to Artificium to start creating magic.
            </p>
          </div>
          <form
            className="mt-12 space-y-8 sm:mt-16 sm:space-y-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-6">
              <Input
                autoComplete="email"
                placeholder="E-mail"
                icon="mail"
                variant={errors.email && inputVariant}
                hint={errors.email?.message}
                {...register("email")}
              />
              <Input
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                icon="padlock"
                variant={errors.password && inputVariant}
                hint={errors.password?.message}
                {...register("password")}
              />
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <Checkbox>Remember me</Checkbox>
              <p className="bg-blue-green-500 bg-clip-text text-body-m-semibold text-transparent sm:text-body-l-semibold">
                Forgot Password?
              </p>
            </div>
            <Button
              className="w-full"
              type="submit"
              label="Log in"
              size="large"
              isLoading={isSending}
            />
            <Divider>or continue with</Divider>
            <div className="flex flex-col space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
              <SocialLoginButton
                type="button"
                onClick={signInWithGoogle}
                label="Google Account"
                icon="google"
              />
              <SocialLoginButton label="Apple Account" icon="apple" />
            </div>
          </form>
        </div>
        <div className="mb-12 text-center sm:ml-12 sm:text-left">
          <p className="text-body-m-semibold text-noble-black-400 md:text-body-l-semibold">
            {"Don’t have an account? "}
            <Link
              href="/register"
              className="bg-blue-green-500 bg-clip-text text-transparent"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <Image
        src={sideImage}
        alt="Side Image"
        className="hidden h-full min-h-screen rounded-s-3xl object-cover xl:block"
      />
    </main>
  )
}
