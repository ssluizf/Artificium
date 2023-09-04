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
  endAdornment?: React.ReactNode
}

const Input = forwardRef(function Input(
  {
    label,
    variant = "default",
    icon,
    hint,
    type,
    className = "",
    endAdornment,
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
    <div className="w-full space-y-3 sm:space-y-4">
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
        className={`overflow-hidden rounded-lg ${inputClasses[variant]} group peer`}
      >
        <div
          className="flex h-10 sm:h-12 w-full items-center space-x-3
            rounded-lg bg-noble-black-600 px-4 text-noble-black-400"
        >
          {icon && <Icon data-test="input-icon" name={icon} size="large" />}
          <input
            data-test="input"
            ref={ref}
            type={passwordVisible ? "text" : type}
            className={`${className} focus:shadow-none h-full w-full border-0
              bg-transparent p-0 text-body-m-medium sm:text-body-l-medium
              text-noble-black-200 outline-none placeholder:text-noble-black-300 focus:ring-0`}
            {...props}
          />
          {type === "password" && (
            <button
              data-test="input-eye-button"
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="hidden group-focus-within:block"
            >
              <Icon name={passwordVisible ? "eye" : "eyeCross"} size="large" />
            </button>
          )}
          {endAdornment}
        </div>
      </div>
      {hint && (
        <div
          className="flex items-center space-x-3
          text-body-m-regular text-noble-black-400
          peer-[.input--error]:text-red-power-600
          peer-[.input--success]:text-electric-green-600
          peer-[.input--warning]:text-happy-orange-600"
        >
          <Icon name="infoCircleSolid" size="small" />
          <span data-test="input-hint">{hint}</span>
        </div>
      )}
    </div>
  )
})

export default Input
