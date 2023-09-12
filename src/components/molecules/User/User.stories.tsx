import type { Meta, StoryObj } from "@storybook/react"

import User from "./"
import avatar from "@/assets/images/Intellisys.png"

const meta: Meta<typeof User> = {
  component: User,
}

export default meta
type Story = StoryObj<typeof User>

export const Default: Story = {
  args: {
    name: "Intellisys",
    description: "12 members",
    src: avatar
  },
}
