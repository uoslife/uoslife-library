import { IconsNameType } from "../../..";
import { Image } from "react-native";

export type IconProps = {
	name: IconsNameType;
	width: number;
	height: number;
};

const getImageUrl = (name: string) => {
	return new URL(`../../../assets/images/icons/${name}.png`, import.meta.url)
		.href;
};

export const Icon = ({ name, width, height }: IconProps) => {
	return (
		<Image source={{ uri: getImageUrl(name) }} style={{ width, height }} />
	);
};
