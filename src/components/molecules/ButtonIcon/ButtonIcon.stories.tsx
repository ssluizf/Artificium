import type { Meta, StoryObj } from "@storybook/react"

import ButtonIcon from "./"

const meta: Meta<typeof ButtonIcon> = {
  component: ButtonIcon,
}

export default meta
type Story = StoryObj<typeof ButtonIcon>

export const Default: Story = {
  args: {
    icon: "alertCircle",
  },
}

export const Secondary: Story = {
  args: {
    icon: "alertCircle",
    variant: "secondary",
  },
}

export const Tertiary: Story = {
  args: {
    icon: "alertCircle",
    variant: "tertiary",
  },
}

export const Ghost: Story = {
  args: {
    icon: "alertCircle",
    variant: "ghost",
  },
}

export const Glass: Story = {
  args: {
    icon: "alertCircle",
    variant: "glass",
  },
}

export const Large: Story = {
  args: {
    icon: "alertCircle",
    size: "large",
  },
}

export const Small: Story = {
  args: {
    icon: "alertCircle",
    size: "small",
  },
}
