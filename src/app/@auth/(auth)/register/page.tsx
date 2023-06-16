"use client"

import { useMemo, useState, useEffect } from "react"
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
import Snackbar from "@/components/molecules/Snackbar"

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
    agreeWithTerms: yup.boolean().required().isTrue(),
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

  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const inputVariant = useMemo(
    () => (isSubmitted ? "error" : "warning"),
    [isSubmitted]
  )

  useEffect(() => {
    setSnackbarOpen(Boolean(errors.agreeWithTerms))
  }, [errors.agreeWithTerms])

  return (
    <main className="grid grid-cols-11">
      <Snackbar
        variant="warning"
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        autoHideDuration={4000}
      >
        <span className=" text-noble-black-0">{"Must agree with "}</span>
        <span className="text-body-s-semibold">{"Terms and Conditions "}</span>
        <span className="text-noble-black-0">{"to continue."}</span>
      </Snackbar>
      <div
        className="col-span-7 grid h-full
        min-h-screen auto-rows-min grid-cols-1 justify-between"
      >
        <div
          className="mx-12 mb-32 mt-12
          flex items-center justify-between"
        >
          <Logo name="logoSymbolGradient" className="h-8 w-8" />
          <Link
            href="/"
            className="bg-blue-green-500 bg-clip-text text-body-l-semibold text-transparent"
          >
            Log In
          </Link>
        </div>
        <div className="mx-28 mb-32">
          <p className="text-heading-xl-regular text-noble-black-0">
            Connect with your team and bring your creative ideas to life.
          </p>
          <form className="mt-16 space-y-12" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 grid-rows-2 gap-6">
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
            <Checkbox {...register("agreeWithTerms")}>
              {"I agree with "}
              <Link
                href="/register"
                className="bg-blue-green-500 bg-clip-text text-body-l-semibold text-transparent"
              >
                Terms and conditions
              </Link>
            </Checkbox>
            <Button label="Create free account" size="large" />
          </form>
        </div>
        <div
          className="mx-12 mb-12 flex 
          items-center justify-between text-body-m-medium text-noble-black-300"
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
