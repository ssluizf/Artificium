import type { Meta, StoryObj } from "@storybook/react"

import Avatar from "./"
import avatar from "@/assets/images/Intellisys.png"

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: avatar,
    alt: "Avatar",
    className: "h-12 w-12 rounded-[20px]"
  },
}
