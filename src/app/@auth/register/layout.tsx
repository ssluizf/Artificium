import Image from "next/image"
import sideImage from "@/assets/images/illustrations-abstract-03.png"

export default function Layout({
  workspace,
  register,
}: {
  workspace: React.ReactNode
  register: React.ReactNode
}) {
  const isLoggedIn = false

  return (
    <div className="grid grid-cols-11">
      {isLoggedIn ? workspace : register}
      <Image
        src={sideImage}
        alt="Side Image"
        className="col-span-4 h-full min-h-screen rounded-s-3xl object-cover"
      />
    </div>
  )
}
