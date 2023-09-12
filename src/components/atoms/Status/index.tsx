import { StatusIcons } from "@/assets/icons"

export type statusIconName = keyof typeof StatusIcons

type IconProps = {
  name: statusIconName,
  className: string
}


export default function Status({ name, className }: IconProps) {
  const Icon = StatusIcons[name]

  return <Icon className={`w-[34px] h-[34px] -m-[10px] ${className}`} />
}
