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

export const iconClasses = {
  apple: "icon--medium sm:icon--large",
  google: "icon--small sm:icon--medium",
}

export default function SocialLoginButton({
  label,
  icon,
  ...props
}: SocialLoginButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const IconComponent = Icons[icon]

  return (
    <button
      data-test="button"
      className={`btn--tertiary btn--medium sm:btn--large flex w-full items-center justify-center space-x-3 whitespace-nowrap`}
      {...props}
    >
      <IconComponent data-test="icon" className={iconClasses[icon]} />
      <span className="mt-[2px] sm:mt-0">{label}</span>
    </button>
  )
}
