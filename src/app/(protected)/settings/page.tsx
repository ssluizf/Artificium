"use client"

import React, { useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { doc, setDoc } from "firebase/firestore"
import { db, auth } from "@/config/firebase-config"

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

export default function SettingsPage() {
  const router = useRouter()
  const [open, setOpen] = useState(true)
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

  const postUser = async (uid: string, firstName: string, lastName: string) => {
    setIsSending(true)

    await setDoc(doc(db, "users", uid), {
      firstName,
      lastName,
    })

    setIsSending(false)
  }

  const onSubmit: SubmitHandler<FormData> = async ({ firstName, lastName }) => {
    const user = auth.currentUser

    if (user) {
      await postUser(user?.uid, firstName, lastName)

      router.push("/")
      setOpen(false)
    }
  }

  return open ? (
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
        <Button className="ml-auto" label="Submit" isLoading={isSending} />
      </form>
    </Modal>
  ) : null
}
