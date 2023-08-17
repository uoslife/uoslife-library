import styled from "@emotion/native";
import { IconsNameType } from "../../..";

export type IconProps = {
	name: IconsNameType;
	size: 16 | 20 | 24;
};

export const Icon = ({ name, size }: IconProps) => {
	return (
		<S.ImageWrapper
			source={{
				uri: `../../../assets/images/icons/${name}.png`,
			}}
			size={size}
		/>
		// <img src="../../../assets/images/icons/bookmark_grey60.png" />
	);
};

const S = {
	ImageWrapper: styled.Image<Pick<IconProps, "size">>`
		width: ${({ size }) => size}px;
		height: ${({ size }) => size}px;
	`,
};
