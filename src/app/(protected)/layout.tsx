"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { doc, getDoc } from "firebase/firestore"

import { auth, db } from "@/config/firebase-config"

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  const fetchUser = useCallback(async (uid) => {
    const docRef = doc(db, "users", uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data()
    }
  }, [])

  useEffect(() => {
    async function request(user) {
      const userData = await fetchUser(user.uid)

      if (!(userData?.firstName && userData?.lastName)) {
        router.push("/settings")
      }

      setIsLoading(false)
    }

    auth.onAuthStateChanged((user) => {
      request(user)
    })
  }, [router, fetchUser])

  return isLoading ? (
    <></>
  ) : (
    <>
      {children}
      {modal}
    </>
  )
}
