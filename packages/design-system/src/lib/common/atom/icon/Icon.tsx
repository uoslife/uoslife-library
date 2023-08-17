import styled from "@emotion/native";
// import { IconNameList } from "../../../assets/images/icons";
import { IconsNameType } from "../../..";

export type IconProps = {
	name: IconsNameType;
	size: 16 | 20 | 24;
};

const getImageUrl = async (name: string) => {
	return new URL(`../../../assets/images/icons/${name}.png`, import.meta.url)
		.href;
};

// const IconsRequireObject: IconsRequireObjectType = {
// 	uoslife_white: { uri: getImageUrl("uoslife_white") },
// 	cafeteria_primaryDarker: require(getImageUrl("cafeteria_primaryDarker")),
// 	library_primaryDarker: 0,
// 	campaign_primaryDarker: 0,
// 	utility_primaryBrand: 0,
// 	utility_grey130: 0,
// 	studentId_primaryBrand: 0,
// 	studentId_grey130: 0,
// 	person_primaryBrand: 0,
// 	person_grey130: 0,
// 	person_white: 0,
// 	openInNew_primaryBrand: 0,
// 	timer_primaryBrand: 0,
// 	bookmark_primaryBrand: 0,
// 	bookmark_grey60: 0,
// };

export const Icon = ({ name, size }: IconProps) => {
	return (
		<S.ImageWrapper
			source={{ uri: getImageUrl(name) as unknown as string }}
			style={{ width: size, height: size }}
		/>
	);
};

const S = {
	ImageWrapper: styled.Image``,
};
