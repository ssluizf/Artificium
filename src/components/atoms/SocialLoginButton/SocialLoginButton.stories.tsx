import type { Meta, StoryObj } from "@storybook/react"

import SocialLoginButton from "./"

const meta: Meta<typeof SocialLoginButton> = {
  component: SocialLoginButton,
}

export default meta
type Story = StoryObj<typeof SocialLoginButton>

export const Google: Story = {
  args: {
    label: "Google Account",
    icon: "google",
  },
}

export const Apple: Story = {
  args: {
    label: "Apple Account",
    icon: "apple",
  },
}
