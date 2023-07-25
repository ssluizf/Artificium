"use client"

import Image from "next/image"
import sideImage from "@/assets/images/illustrations-abstract-04.png"

import AuthHeader from "@/components/molecules/AuthHeader"
import PrivacyPolicyFooter from "@/components/atoms/PrivacyPoliceFooter"

export default function WorkspaceLayout({
  join,
  request,
}: {
  join: React.ReactNode
  request: React.ReactNode
}) {
  const hasAccessToWorkspace = false

  return (
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
  )
}
