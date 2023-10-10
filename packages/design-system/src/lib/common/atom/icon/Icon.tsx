import { IconsNameType, colorsType } from "../../..";
import { Image, ImageProps } from "react-native";
import { colors } from "../../../constants/colors";

export type IconProps = {
	name: IconsNameType;
	width: number;
	height: number;
	color?: colorsType;
	color_rgb?: string;
} & Omit<ImageProps, "source">;

const getImageUrl = (name: string) => {
	return new URL(`../../../assets/images/icons/${name}.png`, import.meta.url)
		.href;
};

export const Icon = ({
	name,
	width,
	height,
	color,
	color_rgb,
	style,
	...props
}: IconProps) => {
	return (
		<Image
			source={{ uri: getImageUrl(name) }}
			style={[
				{
					width,
					height,
					tintColor: (color && colors[color]) ?? color_rgb,
					...(style as object),
				},
			]}
			{...props}
		/>
	);
};
