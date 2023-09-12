import type { Meta, StoryObj } from "@storybook/react"

import Modal from "./"

const meta: Meta<typeof Modal> = {
  component: Modal,
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    children: (
      <div
        data-test="modal-content"
        className="text-heading-l-semibold text-noble-black-0"
      >
        Modal
      </div>
    ),
  },
}
