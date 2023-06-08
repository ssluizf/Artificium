"use client"

import { ButtonHTMLAttributes } from "react"

import apple from "@/assets/images/apple.svg"
import google from "@/assets/images/google.svg"

const Icons = {
  apple,
  google,
}

type SocialLoginButtonProps = {
  label: string
  icon: "google" | "apple"
}

export default function SocialLoginButton({
  label,
  icon,
  ...props
}: SocialLoginButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const iconClasses = {
    apple: "icon--large",
    google: "icon--medium",
  }

  const IconComponent = Icons[icon]

  return (
    <button
      data-test="button"
      className={`btn--tertiary btn--large w-full space-x-3 flex items-center justify-center whitespace-nowrap`}
      {...props}
    >
      <IconComponent data-test="icon" className={iconClasses[icon]} />
      <span>{label}</span>
    </button>
  )
}
