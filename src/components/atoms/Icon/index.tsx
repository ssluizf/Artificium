"use client"

import { SVGAttributes } from "react"
import Icons from "@/assets/icons"
import { size } from "@/typings"

export type iconName = keyof typeof Icons

type IconProps = {
  name: iconName
  size?: size
}

export const iconClasses = {
  large: "icon--medium sm:icon--large",
  medium: "icon--small sm:icon--medium",
  small: "icon--xs sm:icon--small",
}

export default function Icon({
  name,
  size = "medium",
  className,
  ...props
}: IconProps & SVGAttributes<HTMLInputElement>) {
  const IconComponent = Icons[name]

  return (
    <IconComponent
      data-test="icon"
      name={name}
      className={`${iconClasses[size]} ${className}`}
      {...props}
    />
  )
}
