import { Plus_Jakarta_Sans } from "next/font/google"
import "@/styles/global.css"

const baseFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
})

export default function RootLayout({
  dashboard,
  auth,
}: {
  dashboard: React.ReactNode
  auth: React.ReactNode
}) {
  const isConnectedToWorkspace = false

  return (
    <html lang="en" className={baseFont.variable}>
      <body>{isConnectedToWorkspace ? dashboard : auth}</body>
    </html>
  )
}
