import { ButtonHTMLAttributes } from "react"

import { size } from "@/typings"
import apple from "@/assets/images/apple.svg"
import google from "@/assets/images/google.svg"

const Icons = {
  apple,
  google,
}

type ButtonProps = {
  label: string
  icon: "google" | "apple"
}

export default function Button({
  label,
  icon,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const iconClasses = {
    apple: "icon--large",
    google: "icon--medium",
  }

  const IconComponent = Icons[icon]

  return (
    <button
      data-test="button"
      className={`btn--tertiary btn--large space-x-3 flex items-center w-min whitespace-nowrap`}
      {...props}
    >
      <IconComponent data-test="icon" className={iconClasses[icon]} />
      <span>{label}</span>
    </button>
  )
}
