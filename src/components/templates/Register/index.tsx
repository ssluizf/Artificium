import Image from "next/image";

import sideImage from "@/assets/images/illustrations-abstract-03.png"

type RegisterProps = {
  children: React.ReactNode
}

export default function Register({ children }: RegisterProps) {
  return (
    <main className="grid h-full grid-cols-11">
      {children}
      <Image
        src={sideImage}
        alt="Side Image"
        className="col-span-4 h-full min-h-screen rounded-s-3xl object-cover"
      />
    </main>
  )
}