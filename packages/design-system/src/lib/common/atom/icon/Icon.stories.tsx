import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
	component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
	args: {
		name: "cafeteria_primaryDarker",
		width: 32,
		height: 32,
	},
};
