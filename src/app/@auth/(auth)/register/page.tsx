"use client"

import { useMemo } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Image from "next/image"
import Link from "next/link"

import sideImage from "@/assets/images/illustrations-abstract-03.png"

import Button from "@/components/atoms/Button"
import Logo from "@/components/atoms/Logo"
import Input from "@/components/molecules/Input"
import Checkbox from "@/components/molecules/Checkbox"

const schema = yup
  .object({
    firstName: yup.string().required("Required field"),
    lastName: yup.string().required("Required field"),
    password: yup
      .string()
      .required("Required field")
      .min(8, "Password is too short - should be 8 chars minimum"),
    confirmPassword: yup
      .string()
      .required("Required field")
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required()

type FormData = yup.InferType<typeof schema>

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  const inputVariant = useMemo(
    () => (isSubmitted ? "error" : "warning"),
    [isSubmitted]
  )

  return (
    <main className="grid grid-cols-11">
      <div
        className="col-span-7 h-full min-h-screen
        grid grid-cols-1 auto-rows-min justify-between"
      >
        <div
          className="flex items-center justify-between
          mt-12 mb-32 mx-12"
        >
          <Logo name="logoSymbolGradient" className="h-8 w-8" />
          <Link
            href="/"
            className="text-body-l-semibold text-transparent bg-blue-green-500 bg-clip-text"
          >
            Log In
          </Link>
        </div>
        <div className="mx-28 mb-32">
          <p className="text-heading-xl-regular text-noble-black-0">
            Connect with your team and bring your creative ideas to life.
          </p>
          <form className="space-y-12 mt-16" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6 grid-cols-2 grid-rows-2">
              <Input
                label="First name"
                placeholder="First name"
                autoComplete="given-name"
                variant={errors.firstName && inputVariant}
                hint={errors.firstName?.message}
                {...register("firstName")}
              />
              <Input
                label="Last name"
                placeholder="Last name"
                autoComplete="additional-name"
                variant={errors.lastName && inputVariant}
                hint={errors.lastName?.message}
                {...register("lastName")}
              />
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
            <Checkbox>
              {"I agree with "}
              <Link
                href="/register"
                className="text-body-l-semibold text-transparent bg-blue-green-500 bg-clip-text"
              >
                Terms and conditions
              </Link>
            </Checkbox>
            <Button label="Create free account" size="large" />
          </form>
        </div>
        <div
          className="flex items-center justify-between 
          mb-12 mx-12 text-body-m-medium text-noble-black-300"
        >
          <p>Artificium.app © 2023</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <Image
        src={sideImage}
        alt="Side Image"
        className="col-span-4 h-full min-h-screen rounded-s-3xl object-cover"
      />
    </main>
  )
}
