"use client"

import React, { useEffect } from "react"

import Icon, { iconName } from "@/components/atoms/Icon"

type SnackbarProps = {
  children: React.ReactNode
  variant: "tip" | "error" | "warning" | "success"
  open: boolean
  onClose: () => void
  autoHideDuration?: number
}

export const variantIcons: { [key: string]: iconName } = {
  tip: "bulb",
  error: "alertHexagon",
  warning: "alertTriangle",
  success: "checkCircle",
}

export const variantClasses = {
  tip: "text-day-blue-500",
  error: "text-red-power-600",
  warning: "text-happy-orange-600",
  success: "text-electric-green-600",
}

export default function Snackbar({
  children,
  variant,
  open,
  onClose,
  autoHideDuration = 3000,
}: SnackbarProps) {
  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => {
        onClose()
      }, autoHideDuration)
  
      return () => clearTimeout(timeout)
    }
  }, [open, onClose, autoHideDuration])

  return (
    <div
      data-test="snackbar"
      className={`${open ? "opacity-1" : "opacity-0"} ${variantClasses[variant]}
        fixed right-0 top-0 z-50 mr-4
        mt-4 flex h-12 w-min items-center
        space-x-4 whitespace-nowrap rounded-lg
        bg-noble-black-900 px-4 text-body-s-medium
        transition-opacity duration-200 ease-in-out`}
    >
      <Icon data-test="snackbar-icon" name={variantIcons[variant]} />
      <div>{children}</div>
    </div>
  )
}
