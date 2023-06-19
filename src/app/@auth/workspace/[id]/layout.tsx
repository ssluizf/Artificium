import Image from "next/image"
import sideImage from "@/assets/images/illustrations-abstract-03.png"

export default function Layout({
  join,
  request,
}: {
  join: React.ReactNode
  request: React.ReactNode
}) {
  const hasAccessToWorkspace = false

  return (
    <div className="grid grid-cols-11">
      {hasAccessToWorkspace ? join : request}
      <Image
        src={sideImage}
        alt="Side Image"
        className="col-span-4 h-full min-h-screen rounded-s-3xl object-cover"
      />
    </div>
  )
}
