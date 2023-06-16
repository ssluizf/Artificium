import type { Meta, StoryObj } from "@storybook/react"

import Input from "./"

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Label: Story = {
  args: {
    label: "Input Label",
  },
}

export const Hint: Story = {
  args: {
    hint: "Input Hint",
  },
}

export const Icon: Story = {
  args: {
    icon: "padlock",
    placeholder: "Input Icon",
  },
}

export const Error: Story = {
  args: {
    variant: "error",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
  },
}

export const Success: Story = {
  args: {
    variant: "success",
  },
}

export const Password: Story = {
  args: {
    type: "password",
  },
}
