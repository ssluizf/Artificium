export const metadata = {
  title: "Login",
  description: "Let's get creative",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>{children}</main>
}
