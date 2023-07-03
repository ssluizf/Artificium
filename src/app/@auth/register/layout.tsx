"use client"

import { createContext, useState } from "react"
import Image from "next/image"

import sideImage from "@/assets/images/illustrations-abstract-03.png"

export type CurrentUserContextType = {
  currentUser: { name: string }
  setCurrentUser: (user: any) => void
}

export const CurrentUserContext = createContext<CurrentUserContextType | {}>({})

export default function Layout({
  workspace,
  register,
}: {
  workspace: React.ReactNode
  register: React.ReactNode
}) {
  const [currentUser, setCurrentUser] = useState({ name: "Luiz" })

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <main className="grid h-full grid-cols-11">
        {Boolean(currentUser) ? workspace : register}
        <Image
          src={sideImage}
          alt="Side Image"
          className="col-span-4 h-full min-h-screen rounded-s-3xl object-cover"
        />
      </main>
    </CurrentUserContext.Provider>
  )
}
