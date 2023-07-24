"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { auth } from "@/config/firebase-config"
import { signOut } from "firebase/auth"

export default function Logout() {
  const router = useRouter()

  useEffect(() => {
    async function logout() {
      await signOut(auth)

      const response = await fetch("/api/logout", {
        method: "POST",
      })

      if (response.status === 200) {
        router.push("/login")
      }
    }

    logout()
  }, [router])

  return <></>
}
