import type { Meta, StoryObj } from "@storybook/react"

import Button from "./"

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    label: "Button",
  },
}

export const Secondary: Story = {
  args: {
    label: "Button",
    variant: "secondary",
  },
}

export const Tertiary: Story = {
  args: {
    label: "Button",
    variant: "tertiary",
  },
}

export const Ghost: Story = {
  args: {
    label: "Button",
    variant: "ghost",
  },
}

export const Glass: Story = {
  args: {
    label: "Button",
    variant: "glass",
  },
}

export const Large: Story = {
  args: {
    label: "Button",
    size: "large",
  },
}

export const Small: Story = {
  args: {
    label: "Button",
    size: "small",
  },
}

export const Loading: Story = {
  args: {
    label: "Button",
    size: "medium",
    isLoading: true
  },
}
