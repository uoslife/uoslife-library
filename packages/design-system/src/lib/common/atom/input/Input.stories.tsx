import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";
import { Timer } from "..";
import { css } from "@emotion/native";

const meta: Meta<typeof Input> = {
	component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
	args: {
		placeholder: "인증번호 입력",
	},
};
export const Secondary = {
	render: () => (
		<Input
			children={
				<Timer
					style={css`
						position: absolute;
						top: 20px;
						right: 7px;
					`}
				/>
			}
		/>
	),
};
