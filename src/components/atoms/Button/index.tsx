import { ButtonHTMLAttributes } from "react"
import { size, variant } from "@/typings"

type ButtonProps = {
  label: string
  size?: size
  variant?: variant
  isLoading?: boolean
}

export const btnClasses = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  tertiary: "btn--tertiary",
  ghost: "btn--ghost",
  glass: "btn--glass",
  large: "btn--medium sm:btn--large",
  medium: "btn--small sm:btn--medium",
  small: "btn--small",
}

export const btnLoadingClasses = {
  primary: "btn__loading--primary",
  secondary: "btn__loading--secondary",
  tertiary: "btn__loading--tertiary",
  ghost: "btn__loading--ghost",
  glass: "btn__loading--glass",
  large: "btn__loading--medium sm:btn__loading--large",
  medium: "btn__loading--small sm:btn__loading--medium",
  small: "btn__loading--small",
}

export default function Button({
  label,
  size = "medium",
  variant = "primary",
  className = "",
  isLoading,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      data-test="button"
      className={`${className} ${btnClasses[variant]} ${btnClasses[size]}
        relative flex items-center justify-center
        whitespace-nowrap disabled:cursor-not-allowed`}
      {...props}
    >
      {isLoading && (
        <div
          data-test="button-loading"
          className={`${btnLoadingClasses[variant]} ${btnLoadingClasses[size]}
          absolute animate-spin rounded-full border-solid`}
        />
      )}
      <span data-test="button-label" className={isLoading ? "invisible" : ""}>
        {label}
      </span>
    </button>
  )
}
