"use client"

import { useCallback, useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { usePathname, useRouter } from "next/navigation"

import { auth, db } from "@/config/firebase-config"

import Snackbar from "@/components/molecules/Snackbar"

export default function WorkspaceLayout({
  access,
  workspace,
}: {
  access: React.ReactNode
  workspace: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMember, setIsMember] = useState<boolean | undefined>()
  const [mustExistErrorOpen, setMustExistErrorOpen] = useState(false)

  const fetchWorkspace = useCallback(async (workspaceId: string) => {
    const docRef = doc(db, "workspaces", workspaceId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data()
    }
  }, [])

  useEffect(() => {
    async function requestWorkspace(user) {
      const workspaceId = pathname.split("/")[1]
      const workspaceData = await fetchWorkspace(workspaceId)

      if (workspaceData === undefined) return setMustExistErrorOpen(true)

      if (workspaceData?.roles[user.uid]) {
        setIsMember(true)
      } else {
        setIsMember(false)
      }
    }

    auth.onAuthStateChanged(async (user) => {
      await requestWorkspace(user)
    })
  }, [fetchWorkspace, pathname])

  function handleMustExistErrorClose() {
    setMustExistErrorOpen(false)
    router.push("/")
  }

  if (mustExistErrorOpen)
    return (
      <Snackbar
        variant="error"
        open={mustExistErrorOpen}
        onClose={handleMustExistErrorClose}
        autoHideDuration={4000}
      >
        <span className=" text-noble-black-0">{"Workspace "}</span>
        <span className="text-body-s-semibold">{`${
          pathname.split("/")[1]
        } `}</span>
        <span className="text-noble-black-0">{"doesn't exist."}</span>
      </Snackbar>
    )

  if (isMember === undefined) return <></>

  return isMember ? workspace : access
}
