import { ImageProps } from "next/image"
import Avatar from "@/components/atoms/Avatar"
import Status, { statusIconName } from "@/components/atoms/Status"

type UserProps = {
  name: string
  description: string
  variant?: "default" | "tip" | "error" | "warning"
  status?: statusIconName
}

export const variantClasses = {
  default: "text-stem-green-500",
  tip: "text-day-blue-500",
  error: "text-red-power-600",
  warning: "text-happy-orange-600",
}

export default function User({
  src,
  alt,
  name,
  description,
  variant = "default",
  status
}: UserProps & ImageProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar src={src} alt={alt} className="h-12 w-12 rounded-[20px]" />
        {status && (
          <Status name={status} className="absolute right-0 top-0 -mr-3 -mt-3" />
        )}
      </div>
      <div className="space-y-1">
        <p
          data-test="user-name"
          className="w-min whitespace-nowrap text-body-l-semibold text-noble-black-0"
        >
          {name}
        </p>
        <p
          data-test="user-description"
          className={`w-min ${variantClasses[variant]} whitespace-nowrap text-body-s-medium`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
