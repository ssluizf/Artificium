import { Metadata } from 'next'
 
import Register from "@/components/templates/Register"

export const metadata: Metadata = {
  title: 'Register',
  description: 'Create an account',
}

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <Register>
      {children}
    </Register>
  )
}
