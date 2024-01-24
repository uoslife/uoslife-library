import { Interpolation, Theme, css } from "@emotion/react";

import { colors, typographs } from "../../../index.web";
import { colorsType, typographsType } from "../../../.";

export type TxtProps = {
	label: string;
	color: colorsType;
	typograph: typographsType;
	style?: Interpolation<Theme>;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const Txt = ({ label, color, typograph, style, ...props }: TxtProps) => {
	return (
		<p
			css={[
				css`
					color: ${colors[color]};
					${typographs[typograph]}
				`,
				style,
			]}
			{...props}
		>
			{label}
		</p>
	);
};
