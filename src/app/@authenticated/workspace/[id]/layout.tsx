"use client"

import { createContext, useState } from "react"

import Image from "next/image"
import sideImage from "@/assets/images/illustrations-abstract-04.png"

import AuthHeader from "@/components/molecules/AuthHeader"
import PrivacyPolicyFooter from "@/components/atoms/PrivacyPoliceFooter"

export type CurrentUserContextType = {
  currentUser: { name: string }
  setCurrentUser: (user: any) => void
}

export const CurrentUserContext = createContext<CurrentUserContextType | {}>({})

export default function Layout({
  join,
  request,
}: {
  join: React.ReactNode
  request: React.ReactNode
}) {
  const [currentUser, setCurrentUser] = useState(null)
  const hasAccessToWorkspace = false

  // Redirect

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <main className="grid grid-cols-2">
        <div className="flex h-full min-h-screen flex-col justify-between">
          <AuthHeader />
          {hasAccessToWorkspace ? join : request}
          <PrivacyPolicyFooter />
        </div>
        <Image
          src={sideImage}
          alt="Side Image"
          className="h-full min-h-screen rounded-s-3xl object-cover"
        />
      </main>
    </CurrentUserContext.Provider>
  )
}
