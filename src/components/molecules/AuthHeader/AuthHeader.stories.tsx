import type { Meta, StoryObj } from "@storybook/react"

import AuthHeader from "./"

const meta: Meta<typeof AuthHeader> = {
  component: AuthHeader,
}

export default meta
type Story = StoryObj<typeof AuthHeader>

export const Default: Story = {}

export const LoginLinkVisible: Story = {
  args: {
    showLoginLink: true
  }
}
