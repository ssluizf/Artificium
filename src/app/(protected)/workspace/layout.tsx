"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Layout({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    const hasUsername = false
  
    if (!hasUsername) router.push("/workspace/settings")
  }, [router])

  return (
    <>
      {children}
      {modal}
    </>
  )
}
