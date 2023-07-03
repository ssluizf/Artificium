import Image from "next/image"
import Link from "next/link"

import sideImage from "@/assets/images/illustrations-abstract-01.png"

import Button from "@/components/atoms/Button"
import SocialLoginButton from "@/components/atoms/SocialLoginButton"
import Input from "@/components/molecules/Input"
import Checkbox from "@/components/molecules/Checkbox"
import AuthHeader from "@/components/molecules/AuthHeader"
import Divider from "@/components/atoms/Divider"

export const metadata = {
  title: "Login",
  description: "Let's get creative",
}

export default function Login() {
  return (
    <main className="grid grid-cols-2">
      <div className="flex h-full min-h-screen flex-col justify-between">
        <AuthHeader />
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
            <Divider>or continue with</Divider>
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
