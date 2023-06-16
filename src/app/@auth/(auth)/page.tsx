import Image from "next/image"
import Link from "next/link"

import sideImage from "@/assets/images/illustrations-abstract-01.png"

import Button from "@/components/atoms/Button"
import Logo from "@/components/atoms/Logo"
import SocialLoginButton from "@/components/atoms/SocialLoginButton"
import Input from "@/components/molecules/Input"
import Checkbox from "@/components/molecules/Checkbox"

export default function Login() {
  return (
    <main className="grid grid-cols-2">
      <div className="h-full min-h-screen grid grid-cols-1 auto-rows-min justify-between">
        <Logo name="logoSymbolGradient" className="h-8 w-8 mt-12 ml-12 mb-32" />
        <div className="mx-28 mb-32">
          <div className="space-y-6">
            <p className="text-heading-xl-regular text-noble-black-0">
              {"Let's get "}
              <span className="text-heading-xl-bold text-transparent bg-day-blue-blue-green-500 bg-clip-text">
                creative!
              </span>
            </p>
            <p className="text-body-xl-medium text-noble-black-300">
              Log in to Artificium to start creating magic.
            </p>
          </div>
          <div className="space-y-12 mt-16">
            <div className="space-y-6">
              <Input autoComplete="email" placeholder="E-mail" icon="mail" />
              <Input
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                icon="padlock"
              />
            </div>
            <div className="flex justify-between">
              <Checkbox>Remember me</Checkbox>
              <p className="text-body-l-semibold text-transparent bg-blue-green-500 bg-clip-text">
                Forgot Password?
              </p>
            </div>
            <Button label="Log in" size="large" />
            <div className="flex w-full space-x-4 justify-between items-center text-noble-black-400">
              <hr className="w-full" />
              <span className="text-body-s-medium whitespace-nowrap">
                or continue with
              </span>
              <hr className="w-full" />
            </div>
            <div className="flex space-x-6">
              <SocialLoginButton label="Google Account" icon="google" />
              <SocialLoginButton label="Apple Account" icon="apple" />
            </div>
          </div>
        </div>
        <div className="mb-12 ml-12">
          <p className="text-body-l-semibold text-noble-black-400">
            {"Don’t have an account? "}
            <Link
              href="/register"
              className="text-transparent bg-blue-green-500 bg-clip-text"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <Image
        src={sideImage}
        alt="Side Image"
        className="h-full min-h-screen rounded-s-3xl object-cover"
      />
    </main>
  )
}
