import { IconsNameType, colorsType } from "../../..";
import { Image, ImageProps } from "react-native";
import { colors } from "../../../constants/colors";

export type IconProps = {
	name: IconsNameType;
	width: number;
	height: number;
	color: colorsType;
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
	style,
	...props
}: IconProps) => {
	return (
		<Image
			source={{ uri: getImageUrl(name) }}
			style={[
				{ width, height, tintColor: colors[color], ...(style as object) },
			]}
			{...props}
		/>
	);
};
