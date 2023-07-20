import { Plus_Jakarta_Sans } from "next/font/google"

import "@/styles/global.css"

const baseFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={baseFont.variable}>
      <body>{children}</body>
    </html>
  )
}
