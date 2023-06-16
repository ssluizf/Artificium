import type { Meta, StoryObj } from "@storybook/react"

import Snackbar from "./"

const meta: Meta<typeof Snackbar> = {
  component: Snackbar,
}

export default meta
type Story = StoryObj<typeof Snackbar>

export const Tip: Story = {
  args: {
    children: (
      <>
        <span className="text-body-s-semibold">{"Did you know? "}</span>
        <span className="text-noble-black-0">
          {"Artificium can memorize things."}
        </span>
      </>
    ),
    variant: "tip",
    open: true,
    onClose: () => {},
  },
}

export const Warning: Story = {
  args: {
    children: (
      <>
        <span className="text-body-s-semibold">{"Warning! "}</span>
        <span className="text-noble-black-0">
          {"This action cannot be undone."}
        </span>
      </>
    ),
    variant: "warning",
    open: true,
    onClose: () => {},
  },
}

export const Error: Story = {
  args: {
    children: (
      <>
        <span className="text-body-s-semibold">{"Something went wrong. "}</span>
        <span className="text-noble-black-0">{"Please try again later."}</span>
      </>
    ),
    variant: "error",
    open: true,
    onClose: () => {},
  },
}

export const Success: Story = {
  args: {
    children: (
      <>
        <span className="text-body-s-semibold">{"Success! "}</span>
        <span className="text-noble-black-0">
          {"Your changes have been saved."}
        </span>
      </>
    ),
    variant: "success",
    open: true,
    onClose: () => {},
  },
}
