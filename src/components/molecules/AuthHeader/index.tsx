import Link from "next/link"
import Logo from "@/components/atoms/Logo"

type AuthHeaderProps = {
  showLoginLink?: boolean
}

export default function AuthHeader({ showLoginLink }: AuthHeaderProps) {
  return (
    <header
      className="mx-auto mb-12 mt-8 flex items-center justify-between sm:mx-8 sm:mb-28 sm:mt-8
        md:mx-12 md:mb-32 md:mt-12"
    >
      <Link href="/login">
        <Logo name="logoSymbolGradient" className="h-8 w-8" />
      </Link>
      {showLoginLink && (
        <Link
          href="/login"
          className="hidden bg-blue-green-500 bg-clip-text text-body-l-semibold text-transparent sm:block"
        >
          Log In
        </Link>
      )}
    </header>
  )
}
