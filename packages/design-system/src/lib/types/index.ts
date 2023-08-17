import { ImageSourcePropType } from "react-native";
import { IconNameList } from "../assets/images/icons";
import { colors, sizes, typographs } from "../constants";

export type colorsType = keyof typeof colors;
export type sizesType = keyof typeof sizes;
export type typographsType = keyof typeof typographs;

export type IconsNameType = (typeof IconNameList)[number];
export type IconsRequireObjectType = {
	[K in IconsNameType]: ImageSourcePropType;
};
