import Link from "next/link"
import Logo from "@/components/atoms/Logo"

type AuthHeaderProps = {
  showLoginLink?: boolean
}

export default function AuthHeader({ showLoginLink }: AuthHeaderProps) {
  return (
    <header
      className="mx-12 mb-32 mt-12
    flex items-center justify-between"
    >
      <Logo name="logoSymbolGradient" className="h-8 w-8" />
      {showLoginLink && (
        <Link
          href="/login"
          className="bg-blue-green-500 bg-clip-text text-body-l-semibold text-transparent"
        >
          Log In
        </Link>
      )}
    </header>
  )
}
