"use client"

import React, { useMemo } from "react"
import { useRouter } from "next/navigation"

import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Modal from "@/components/atoms/Modal"
import Input from "@/components/molecules/Input"
import Button from "@/components/atoms/Button"

const schema = yup
  .object({
    firstName: yup.string().required("Required field"),
    lastName: yup.string().required("Required field"),
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

  const inputVariant = useMemo(
    () => (isSubmitted ? "error" : "warning"),
    [isSubmitted]
  )

  const onSubmit: SubmitHandler<FormData> = (data) => {
    router.push("/workspace")
  }

  return (
    <Modal>
      <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <p className="text-heading-s-semibold text-noble-black-0">
            Create your Profile
          </p>
          <p className="text-body-l-medium text-noble-black-300">
            Connect with your team and bring your creative ideas to life.
          </p>
        </div>
        <div className="space-y-5">
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
        </div>
        <Button className="ml-auto" label="Continue" />
      </form>
    </Modal>
  )
}
