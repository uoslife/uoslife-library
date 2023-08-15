import type { Meta, StoryObj } from "@storybook/react";

import { Txt } from "./Txt";

const meta: Meta<typeof Txt> = {
	component: Txt,
};

export default meta;
type Story = StoryObj<typeof Txt>;

export const Primary: Story = {
	args: {
		label: "label",
		color: "secondaryBrand",
		typograph: "headlineLarge",
	},
};
