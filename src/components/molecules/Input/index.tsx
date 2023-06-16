"use client"

import { useState, ForwardedRef, InputHTMLAttributes, forwardRef } from "react"

import Icon, { iconName } from "@/components/atoms/Icon"

type InputProps = {
  label?: string
  placeholder?: string
  variant?: "default" | "error" | "warning" | "success"
  icon?: iconName
  hint?: string
  chips?: boolean
}

const Input = forwardRef(function Input(
  {
    label,
    variant = "default",
    icon,
    hint,
    type,
    ...props
  }: InputProps & InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const inputClasses = {
    default: "input--default",
    error: "input--error",
    warning: "input--warning",
    success: "input--success",
  }

  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <div className="space-y-4">
      {label && (
        <label
          data-test="input-label"
          htmlFor={props.id}
          className="text-body-m-medium text-noble-black-300"
        >
          {label}
        </label>
      )}
      <div
        data-test="input-container"
        className={`rounded-lg overflow-hidden ${inputClasses[variant]} peer`}
      >
        <div
          className="group text-noble-black-400 flex items-center
            w-full h-12 space-x-3 px-4 bg-noble-black-600 rounded-lg"
        >
          {icon && <Icon data-test="input-icon" name={icon} size="large" />}
          <input
            ref={ref}
            type={passwordVisible ? "text" : type}
            className="w-full h-full bg-transparent outline-none
              text-body-l-medium text-noble-black-200 placeholder:text-noble-black-300
              p-0 border-0 focus:shadow-none focus:ring-0"
            {...props}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="hidden group-hover:block"
            >
              <Icon name={passwordVisible ? "eye" : "eyeCross"} size="large" />
            </button>
          )}
        </div>
      </div>
      {hint && (
        <div
          className="flex items-center space-x-3
          text-body-m-regular text-noble-black-400
          peer-[.input--error]:text-red-power-600
          peer-[.input--warning]:text-happy-orange-600
          peer-[.input--success]:text-electric-green-600"
        >
          <Icon name="infoCircleSolid" size="small" />
          <span data-test="input-hint">{hint}</span>
        </div>
      )}
    </div>
  )
})

export default Input
