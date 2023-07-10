"use client"

import { createContext, useState } from "react"
import Image from "next/image"

import sideImage from "@/assets/images/illustrations-abstract-03.png"

export type CurrentUserContextType = {
  currentUser: { email: string }
  setCurrentUser: (user: any) => void
}

export const CurrentUserContext = createContext<CurrentUserContextType | {}>({})

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <main className="grid h-full grid-cols-11">
        {children}
        <Image
          src={sideImage}
          alt="Side Image"
          className="col-span-4 h-full min-h-screen rounded-s-3xl object-cover"
        />
      </main>
    </CurrentUserContext.Provider>
  )
}
