"use client"

import { SVGAttributes } from "react"
import Icons from "@/assets/icons"
import { size } from "@/typings"

export type iconName = keyof typeof Icons

type IconProps = {
  name: iconName
  size?: size
}

export default function Icon({
  name,
  size = "medium",
  ...props
}: IconProps & SVGAttributes<HTMLInputElement>) {
  const iconClasses = {
    large: "icon--medium sm:icon--large",
    medium: "icon--small sm:icon--medium",
    small: "icon--xs sm:icon--small",
  }
  const IconComponent = Icons[name]

  return (
    <IconComponent
      data-test="icon"
      name={name}
      className={`${iconClasses[size]}`}
      {...props}
    />
  )
}
