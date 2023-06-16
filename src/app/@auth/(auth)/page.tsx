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
      <div className="grid h-full min-h-screen auto-rows-min grid-cols-1 justify-between">
        <Logo name="logoSymbolGradient" className="mb-32 ml-12 mt-12 h-8 w-8" />
        <div className="mx-28 mb-32">
          <div className="space-y-6">
            <p className="text-heading-xl-regular text-noble-black-0">
              {"Let's get "}
              <span className="bg-day-blue-blue-green-500 bg-clip-text text-heading-xl-bold text-transparent">
                creative!
              </span>
            </p>
            <p className="text-body-xl-medium text-noble-black-300">
              Log in to Artificium to start creating magic.
            </p>
          </div>
          <div className="mt-16 space-y-12">
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
              <p className="bg-blue-green-500 bg-clip-text text-body-l-semibold text-transparent">
                Forgot Password?
              </p>
            </div>
            <Button label="Log in" size="large" />
            <div className="flex w-full items-center justify-between space-x-4 text-noble-black-400">
              <hr className="w-full" />
              <span className="whitespace-nowrap text-body-s-medium">
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
              className="bg-blue-green-500 bg-clip-text text-transparent"
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
