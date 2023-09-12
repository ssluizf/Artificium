import type { Meta, StoryObj } from "@storybook/react"

import Register from "./"

const meta: Meta<typeof Register> = {
  component: Register,
}

export default meta
type Story = StoryObj<typeof Register>

export const Default: Story = {
  args: {
    children: (
      <div
        data-test="register-content"
        className="col-span-7 text-heading-l-semibold text-noble-black-0"
      >
        Register
      </div>
    ),
  },
}
