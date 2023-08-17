import styled from "@emotion/native";
import IconsRequireObject from "../../../assets/images/icons";
import { IconsNameType } from "../../..";

export type IconProps = {
	name: IconsNameType;
	size: 16 | 20 | 24;
};

// const getImageUrl = (name: string) => {
// 	return new URL(`../../../assets/images/icons/${name}.png`, import.meta.url)
// 		.href;
// };

export const Icon = ({ name, size }: IconProps) => {
	return <S.ImageWrapper source={IconsRequireObject[name]} size={size} />;
};

const S = {
	ImageWrapper: styled.Image<Pick<IconProps, "size">>`
		width: ${({ size }) => size}px;
		height: ${({ size }) => size}px;
	`,
};
