import Icons from "@/assets/icons"
import { size } from "@/typings"

export type iconName = keyof typeof Icons

type IconProps = {
  name: iconName
  size?: size
}

export default function Icon({ name, size = "medium", ...props }: IconProps) {
  const iconClasses = {
    large: "icon--large",
    medium: "icon--medium",
    small: "icon--small",
  }
  const IconComponent = Icons[name]

  return (
    <IconComponent data-test="icon" className={iconClasses[size]} {...props} />
  )
}
