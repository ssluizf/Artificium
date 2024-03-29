"use client"

import { useMemo, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Button from "@/components/atoms/Button"
import PrivacyPolicyFooter from "@/components/atoms/PrivacyPolicyFooter"
import Divider from "@/components/atoms/Divider"
import Input from "@/components/molecules/Input"
import AuthHeader from "@/components/molecules/AuthHeader"
import Register from "@/components/templates/Register"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { auth, db } from "@/config/firebase-config"
import Snackbar from "@/components/molecules/Snackbar"

const schema = yup
  .object({
    workspaceId: yup.string().required("Required field"),
  })
  .required()

type FormData = yup.InferType<typeof schema>

export default function Workspace() {
  const router = useRouter()
  const [mustExistErrorOpen, setMustExistErrorOpen] = useState(false)
  const [existErrorOpen, setExistErrorOpen] = useState(false)
  const [workspaceId, setWorkspaceId] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitted },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const fetchWorkspace = async (workspaceId: string) => {
    const docRef = doc(db, "workspaces", workspaceId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data()
    }
  }

  const postWorkspace = async (uid: string, workspaceId: string) => {
    const workspacesRef = doc(db, "workspaces", workspaceId)

    await setDoc(workspacesRef, {
      roles: {
        [uid]: "owner",
      },
    })
  }

  const onSubmitJoin: SubmitHandler<FormData> = async ({ workspaceId }) => {
    const data = await fetchWorkspace(workspaceId)

    if (data !== undefined) {
      router.push(workspaceId)
    } else {
      setWorkspaceId(workspaceId)
      setMustExistErrorOpen(true)
    }
  }
  const onSubmitCreate: SubmitHandler<FormData> = async ({ workspaceId }) => {
    const data = await fetchWorkspace(workspaceId)

    if (data !== undefined) {
      setWorkspaceId(workspaceId)
      setExistErrorOpen(true)
    } else {
      const uid = auth.currentUser?.uid

      if (uid) {
        await postWorkspace(uid, workspaceId)

        router.push(`/${workspaceId}`)
      }
    }
  }

  const inputVariant = useMemo(
    () => (isSubmitted ? "error" : "warning"),
    [isSubmitted]
  )

  const isDisabled = useMemo(
    () => !!errors.workspaceId || !isDirty,
    [errors.workspaceId, isDirty]
  )

  return (
    <Register>
      <Snackbar
        variant="error"
        open={mustExistErrorOpen}
        onClose={() => setMustExistErrorOpen(false)}
        autoHideDuration={4000}
      >
        <span className=" text-noble-black-0">{"Workspace "}</span>
        <span className="text-body-s-semibold">{`${workspaceId} `}</span>
        <span className="text-noble-black-0">{"doesn't exist."}</span>
      </Snackbar>
      <Snackbar
        variant="error"
        open={existErrorOpen}
        onClose={() => setExistErrorOpen(false)}
        autoHideDuration={4000}
      >
        <span className=" text-noble-black-0">{"Workspace "}</span>
        <span className="text-body-s-semibold">{`${workspaceId} `}</span>
        <span className="text-noble-black-0">{"already exist."}</span>
      </Snackbar>
      <div className="col-span-7 flex h-full min-h-screen flex-col justify-between">
        <AuthHeader />
        <div className="mx-auto mb-24 w-full max-w-md px-4 sm:mx-24 sm:mb-28 sm:w-auto sm:max-w-none md:mx-28 md:mb-32">
          <div className="space-y-6">
            <p className="text-heading-m-regular text-noble-black-0 sm:text-heading-l-regular md:text-heading-xl-regular">
              Join or Create a Workspace
            </p>
            <p className="text-body-m-medium text-noble-black-300 sm:text-body-l-medium md:text-body-xl-medium">
              Connect with others by joining an existing workspace or create a
              new one to collaborate with your team.
            </p>
          </div>
          <form
            className="mt-16 space-y-12"
            onSubmit={handleSubmit(onSubmitJoin)}
          >
            <div className="flex flex-col justify-between space-y-6 md:flex-row md:space-x-6 md:space-y-0">
              <Input
                placeholder="Your workspace URL"
                className="text-end"
                variant={errors.workspaceId && inputVariant}
                hint={errors.workspaceId?.message}
                endAdornment={
                  <span className="text-body-l-medium text-noble-black-400">
                    .artificium.app
                  </span>
                }
                {...register("workspaceId")}
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
