import type { Meta, StoryObj } from "@storybook/react";
import { Example } from "./example.js";

const meta = {
  title: "Example/Example",
  component: Example,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicExample: Story = {};
