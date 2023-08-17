import { colors, sizes, typographs } from "../constants";

export type colorsType = keyof typeof colors;
export type sizesType = keyof typeof sizes;
export type typographsType = keyof typeof typographs;

export type IconsNameType =
	| "uoslife_white"
	| "cafeteria_primaryDarker"
	| "library_primaryDarker"
	| "campaign_priamryDarker"
	| "utility_primaryBrand"
	| "utility_grey130"
	| "studentId_primaryBrand"
	| "studentId_grey130"
	| "person_primaryBrand"
	| "person_grey130"
	| "person_white"
	| "openInNew_primaryBrand"
	| "timer_primaryBrand"
	| "bookMark_primaryBrand"
	| "bookMark_grey60";
