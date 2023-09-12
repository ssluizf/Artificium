import { ButtonHTMLAttributes } from "react"

import Icon, { iconName } from "@/components/atoms/Icon"
import { size, variant } from "@/typings"

type ButtonIconProps = {
  icon: iconName
  size?: size
  variant?: variant
}

export const btnClasses = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  tertiary: "btn--tertiary",
  ghost: "btn--ghost",
  glass: "btn--glass",
  large: "btn--medium sm:btn--large",
  medium: "btn--small sm:btn--medium",
  small: "btn--xs sm:btn--small",
}

export default function ButtonIcon({
  icon,
  size = "medium",
  variant = "primary",
  ...props
}: ButtonIconProps & ButtonHTMLAttributes<HTMLButtonElement>) {

  return (
    <button
      data-test="button-icon"
      className={`btn-icon ${btnClasses[variant]} ${btnClasses[size]} flex w-min items-center justify-center whitespace-nowrap`}
      {...props}
    >
      <Icon name={icon} size={size} />
    </button>
  )
}
