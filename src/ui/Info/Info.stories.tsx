import type { Meta, StoryObj } from "@storybook/react";
import Info from "./Info";

const meta: Meta<typeof Info> = {
  title: "UI/Info",
  component: Info,
};

export const Primary: StoryObj<typeof Info> = {
  args: {
    children: "Hello from storybook",
    variant: "info",
  },
};

export default meta;
