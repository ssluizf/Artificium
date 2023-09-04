"use client"

import { useMemo } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Button from "@/components/atoms/Button"
import PrivacyPolicyFooter from "@/components/atoms/PrivacyPoliceFooter"
import Divider from "@/components/atoms/Divider"
import Input from "@/components/molecules/Input"
import AuthHeader from "@/components/molecules/AuthHeader"
import Register from "@/components/templates/Register"

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
    formState: { errors, isDirty, isSubmitted },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const onSubmitJoin: SubmitHandler<FormData> = (data) => console.log(data)
  const onSubmitCreate: SubmitHandler<FormData> = (data) => console.log(data)

  const inputVariant = useMemo(
    () => (isSubmitted ? "error" : "warning"),
    [isSubmitted]
  )

  const isDisabled = useMemo(
    () => !!errors.workspaceURL || !isDirty,
    [errors.workspaceURL, isDirty]
  )

  return (
    <Register>
      <div className="col-span-7 flex h-full min-h-screen flex-col justify-between">
        <AuthHeader />
        <div className="mx-auto mb-24 w-full max-w-md px-4 sm:mx-24 sm:mb-28 sm:w-auto sm:max-w-none md:mx-28 md:mb-32">
          <div className="space-y-6">
            <p className="text-heading-m-regular sm:text-heading-l-regular md:text-heading-xl-regular text-noble-black-0">
              Join or Create a Workspace
            </p>
            <p className="text-body-m-medium sm:text-body-l-medium md:text-body-xl-medium text-noble-black-300">
              Connect with others by joining an existing workspace or create a
              new one to collaborate with your team.
            </p>
          </div>
          <form
            className="mt-16 space-y-12"
            onSubmit={handleSubmit(onSubmitJoin)}
          >
            <div className="flex flex-col justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6">
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
              onClick={handleSubmit(onSubmitCreate)}
              variant={isDisabled ? "tertiary" : "primary"}
              disabled={isDisabled}
              className="w-full"
            />
          </form>
        </div>
        <PrivacyPolicyFooter />
      </div>
    </Register>
  )
}
