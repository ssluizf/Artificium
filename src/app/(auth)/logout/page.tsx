import { redirect } from "next/navigation"

import { auth } from "@/config/firebase-config"
import { signOut } from "firebase/auth"

export default async function Logout() {
  await signOut(auth)

  const response = await fetch(`${process.env.BASE_URL}/api/logout`, {
    method: "POST",
  })

  if (response.status === 200) {
    redirect("/login")
  }
}
