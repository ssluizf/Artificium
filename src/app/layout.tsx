import { Plus_Jakarta_Sans } from "next/font/google"
import "@/styles/global.css"

const baseFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  dashboard,
  auth,
}: {
  dashboard: React.ReactNode
  auth: React.ReactNode
}) {
  const isLoggedIn = false

  return (
    <html lang="en" className={baseFont.className}>
      <body>{isLoggedIn ? dashboard : auth}</body>
    </html>
  )
}
