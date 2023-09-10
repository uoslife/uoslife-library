import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
	component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
	args: {
		name: "menu",
		width: 24,
		height: 24,
		color: "primaryBrand",
	},
};
