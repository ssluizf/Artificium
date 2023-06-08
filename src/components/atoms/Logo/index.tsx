"use client"

import { SVGAttributes } from "react"

import logo from "@/assets/images/logo.svg"
import logoSymbol from "@/assets/images/logo-symbol.svg"
import logoSymbolGradient from "@/assets/images/logo-symbol-gradient.svg"

const Icons = {
  logo,
  logoSymbol,
  logoSymbolGradient,
}

type LogoProps = {
  name: "logo" | "logoSymbol" | "logoSymbolGradient"
}

export default function Logo({
  name,
  ...props
}: LogoProps & SVGAttributes<HTMLOrSVGElement>) {
  const IconComponent = Icons[name]

  return <IconComponent data-test="icon" {...props} />
}
