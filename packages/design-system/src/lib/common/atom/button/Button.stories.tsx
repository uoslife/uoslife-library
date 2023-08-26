import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		label: "Button",
		size: "medium",
		variant: "filled",
		isEnabled: true,
		isRounded: false,
		isFullWidth: false,
	},
};
export const WithIcon: Story = {
	args: {
		label: "Button",
		size: "medium",
		variant: "outline",
		isEnabled: true,
		isRounded: false,
		isFullWidth: false,
		iconName: "openInNew",
		iconColor: "primaryBrand",
	},
};
