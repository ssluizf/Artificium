"use client"

import { useCallback, useEffect, useState, createContext } from "react"
import { doc, getDoc } from "firebase/firestore"
import { usePathname } from "next/navigation"
import Image from "next/image"

import sideImage from "@/assets/images/illustrations-abstract-04.png"
import { auth, db } from "@/config/firebase-config"

import AuthHeader from "@/components/molecules/AuthHeader"
import PrivacyPolicyFooter from "@/components/atoms/PrivacyPoliceFooter"

export type InvitationContextType = {
  inviteFrom: string
  inviteTo: string
  role: string
}

export const InvitationContext = createContext<InvitationContextType | null>(
  null
)

export default function WorkspaceLayout({
  join,
  request,
}: {
  join: React.ReactNode
  request: React.ReactNode
}) {
  const pathname = usePathname()

  const [hasInvitation, setHasInvitation] = useState<boolean | undefined>()
  const [invitation, setInvitation] = useState<InvitationContextType | null>(
    null
  )

  const fetchInvitation = useCallback(
    async (workspaceId: string, userId: string) => {
      const docRef = doc(db, "workspaces", workspaceId, "invitations", userId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return docSnap.data()
      }
    },
    []
  )

  useEffect(() => {
    async function requestInvitation(user) {
      const workspaceId = pathname.split("/")[1]
      const invitationData = (await fetchInvitation(workspaceId, user.uid)) as
        | InvitationContextType
        | undefined

      if (invitationData !== undefined) {
        setInvitation(invitationData)
        setHasInvitation(true)
      } else {
        setHasInvitation(false)
      }
    }

    auth.onAuthStateChanged(async (user) => {
      await requestInvitation(user)
    })
  }, [fetchInvitation, pathname])

  if (hasInvitation === undefined) return <></>

  return (
    <main className="container grid xl:grid-cols-2">
      <div className="flex h-full min-h-screen flex-col justify-between">
        <AuthHeader />
        <InvitationContext.Provider value={invitation}>
          {hasInvitation ? join : request}
        </InvitationContext.Provider>
        <PrivacyPolicyFooter />
      </div>
      <Image
        src={sideImage}
        alt="Side Image"
        className="hidden h-full min-h-screen rounded-s-3xl object-cover xl:block"
      />
    </main>
  )
}
