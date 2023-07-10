"use client"

import React, { useMemo, useState, useEffect, useContext } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Link from "next/link"

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
    firstName: yup.string().required("Required field"),
    lastName: yup.string().required("Required field"),
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

  const inputVariant = useMemo(
    () => (isSubmitted ? "error" : "warning"),
    [isSubmitted]
  )

  const onSubmit: SubmitHandler<FormData> = (data) => {

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  )
}
