import { InputHTMLAttributes } from "react"

import Icon, { iconName } from "@/components/atoms/Icon"

type InputProps = {
  label?: string
  placeholder?: string
  variant?: "warning" | "error" | "success"
  icon?: iconName
  hint?: string
  chips?: boolean
}

export default function Input({
  label,
  icon,
  hint,
  ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
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
        className="bg-noble-black-500 rounded-lg overflow-hidden
        focus-within:bg-green-blue-day-blue-500 p-[2px]
        focus-within:!shadow-outline-heisenberg-blue
        hover:shadow-outline-noble-black"
      >
        <div className="text-noble-black-400 flex items-center w-full h-12 space-x-3 px-4 bg-noble-black-600 rounded-lg">
          {icon && <Icon data-test="input-icon" name={icon} size="large" />}
          <input
            className="w-full h-full bg-transparent outline-none
              text-body-l-medium text-noble-black-200 placeholder:text-noble-black-300
              p-0 border-0 focus:shadow-none focus:ring-0"
            {...props}
          />
        </div>
      </div>
      {hint && (
        <div className="flex items-center space-x-3 text-body-m-regular text-noble-black-400">
          <Icon name="infoCircleSolid" size="small" />
          <span data-test="input-hint">{hint}</span>
        </div>
      )}
    </div>
  )
}
