import { ButtonHTMLAttributes } from "react"
import { size, variant } from "@/typings"

type ButtonProps = {
  label: string
  size?: size
  variant?: variant
}

export default function Button({
  label,
  size = "medium",
  variant = "primary",
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const btnClasses = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    tertiary: "btn--tertiary",
    ghost: "btn--ghost",
    glass: "btn--glass",
    large: "btn--large",
    medium: "btn--medium",
    small: "btn--small",
  }

  return (
    <button
      data-test="button"
      className={`${btnClasses[variant]} ${btnClasses[size]} flex items-center w-min whitespace-nowrap`}
      {...props}
    >
      <span>{label}</span>
    </button>
  )
}
