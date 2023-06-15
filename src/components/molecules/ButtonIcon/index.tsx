import { ButtonHTMLAttributes } from "react"

import Icon, { iconName } from "@/components/atoms/Icon"
import { size, variant } from "@/typings"

type ButtonIconProps = {
  icon: iconName
  size?: size
  variant?: variant
}

export default function ButtonIcon({
  icon,
  size = "medium",
  variant = "primary",
  ...props
}: ButtonIconProps & ButtonHTMLAttributes<HTMLButtonElement>) {
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
      data-test="button-icon"
      className={`btn-icon ${btnClasses[variant]} ${btnClasses[size]} flex items-center justify-center w-min whitespace-nowrap`}
      {...props}
    >
      <Icon name={icon} size={size} />
    </button>
  )
}
