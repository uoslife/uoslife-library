import { css } from "@emotion/native";
import { Text, TextProps } from "react-native";

import { colors, typographs } from "@/lib/constants";
import { colorsType, typographsType } from "@/lib/types";

type TxtProps = {
	label: string;
	color: colorsType;
	typograph: typographsType;
} & TextProps;

export const Txt = ({ label, color, typograph, ...props }: TxtProps) => {
	return (
		<Text
			style={css`
				color: ${colors[color]};
				${typographs[typograph]}
			`}
			{...props}
		>
			{label}
		</Text>
	);
};