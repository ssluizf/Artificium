"use client"

import { useMemo, useState, useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Button from "@/components/atoms/Button"
import PrivacyPolicyFooter from "@/components/atoms/PrivacyPoliceFooter"
import Input from "@/components/molecules/Input"
import Snackbar from "@/components/molecules/Snackbar"
import AuthHeader from "@/components/molecules/AuthHeader"
import Divider from "@/components/atoms/Divider"

const schema = yup
  .object({
    workspaceURL: yup.string().required("Required field"),
  })
  .required()

type FormData = yup.InferType<typeof schema>

export default function Workspace() {
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
    <>
      <div className="col-span-7 flex h-full min-h-screen flex-col justify-between">
        <AuthHeader />
        <div className="mx-28 mb-32">
          <div className="space-y-6">
            <p className="text-heading-xl-regular text-noble-black-0">
              Join or Create a Workspace
            </p>
            <p className="text-body-xl-medium text-noble-black-300">
              Connect with others by joining an existing workspace or create a
              new one to collaborate with your team.
            </p>
          </div>
          <form className="mt-16 space-y-12" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between space-x-6">
              <Input
                placeholder="Your workspace URL"
                className="text-end"
                variant={errors.workspaceURL && inputVariant}
                hint={errors.workspaceURL?.message}
                endAdornment={
                  <span className="text-body-l-medium text-noble-black-400">
                    .artificium.app
                  </span>
                }
                {...register("workspaceURL")}
              />
              <Button label="Join Workspace" size="large" type="submit" />
            </div>
            <Divider>or</Divider>
            <Button
              label="Create new Workspace"
              size="large"
              type="button"
              variant="tertiary"
              className="w-full"
            />
          </form>
        </div>
        <PrivacyPolicyFooter />
      </div>
    </>
  )
}
