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

  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const inputVariant = useMemo(
    () => (isSubmitted ? "error" : "warning"),
    [isSubmitted]
  )

  useEffect(() => {
    setSnackbarOpen(Boolean(errors.agreeWithTerms))
  }, [errors.agreeWithTerms])

  return (
    <>
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
            <div className="grid grid-cols-2 grid-rows-2 gap-6">
              <Input
                label="First name"
                placeholder="First name"
                autoComplete="given-name"
                variant={errors.firstName && inputVariant}
                hint={errors.firstName?.message}
                {...register("firstName")}
              />
              <Button label="Join Workspace" size="large" />
            </div>
            <Button label="Create new Workspace" size="large" />
          </form>
        </div>
        <PrivacyPolicyFooter />
      </div>
    </>
  )
}
