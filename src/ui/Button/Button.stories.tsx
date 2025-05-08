import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: "Hello from storybook",
    variant: "primary",
    className: "custom-class",
  },
};

export default meta;
