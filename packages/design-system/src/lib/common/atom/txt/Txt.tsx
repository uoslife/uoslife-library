import { css } from "@emotion/native";
import { Text, TextProps } from "react-native";

import { colors, typographs } from "../../../.";
import { colorsType, typographsType } from "../../../.";

export type TxtProps = {
	label: string;
	color: colorsType;
	typograph: typographsType;
} & TextProps;

export const Txt = ({ label, color, typograph, style, ...props }: TxtProps) => {
	return (
		<Text
			style={[
				css`
					color: ${colors[color]};
					${typographs[typograph]}
				`,
				{ ...(style as object) },
			]}
			{...props}
		>
			{label}
		</Text>
	);
};
