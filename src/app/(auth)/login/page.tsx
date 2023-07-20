"use client"
import { useMemo } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from "react-hook-form"

import { signInWithEmailAndPassword } from "@firebase/auth"
import { auth } from "@/config/firebase-config"

import sideImage from "@/assets/images/illustrations-abstract-01.png"

import Button from "@/components/atoms/Button"
import SocialLoginButton from "@/components/atoms/SocialLoginButton"
import Input from "@/components/molecules/Input"
import Checkbox from "@/components/molecules/Checkbox"
import AuthHeader from "@/components/molecules/AuthHeader"
import Divider from "@/components/atoms/Divider"

export const metadata = {
  title: "Login",
  description: "Let's get creative",
}

const schema = yup
  .object({
    email: yup.string().required("Required field"),
    password: yup.string().required("Required field"),
  })
  .required()

type FormData = yup.InferType<typeof schema>

export default function Login() {
  const router = useRouter()

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

  const onSubmit: SubmitHandler<FormData> = async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password).then(
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
      }
    )
  }

  return (
    <main className="grid grid-cols-2">
      <div className="flex h-full min-h-screen flex-col justify-between">
        <AuthHeader />
        <div className="mx-28 mb-32">
          <div className="space-y-6">
            <p className="text-heading-xl-regular text-noble-black-0">
              {"Let's get "}
              <span className="bg-day-blue-blue-green-500 bg-clip-text text-heading-xl-bold text-transparent">
                creative!
              </span>
            </p>
            <p className="text-body-xl-medium text-noble-black-300">
              Log in to Artificium to start creating magic.
            </p>
          </div>
          <form className="mt-16 space-y-12" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="flex justify-between">
              <Checkbox>Remember me</Checkbox>
              <p className="bg-blue-green-500 bg-clip-text text-body-l-semibold text-transparent">
                Forgot Password?
              </p>
            </div>
            <Button type="submit" label="Log in" size="large" />
            <Divider>or continue with</Divider>
            <div className="flex space-x-6">
              <SocialLoginButton label="Google Account" icon="google" />
              <SocialLoginButton label="Apple Account" icon="apple" />
            </div>
          </form>
        </div>
        <div className="mb-12 ml-12">
          <p className="text-body-l-semibold text-noble-black-400">
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
        className="h-full min-h-screen rounded-s-3xl object-cover"
      />
    </main>
  )
}
