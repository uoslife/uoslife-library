import { IconsRequireObjectType } from "../../..";

export const IconNameList = [
	"uoslife_white",
	"cafeteria_primaryDarker",
	"library_primaryDarker",
	"campaign_priamryDarker",
	"utility_primaryBrand",
	"utility_grey130",
	"studentId_primaryBrand",
	"studentId_grey130",
	"person_primaryBrand",
	"person_grey130",
	"person_white",
	"openInNew_primaryBrand",
	"timer_primaryBrand",
	"bookMark_primaryBrand",
	"bookMark_grey60",
] as const;

const IconsRequireObject: IconsRequireObjectType = {
	uoslife_white: 0,
	cafeteria_primaryDarker: 0,
	library_primaryDarker: 0,
	campaign_priamryDarker: 0,
	utility_primaryBrand: 0,
	utility_grey130: 0,
	studentId_primaryBrand: 0,
	studentId_grey130: 0,
	person_primaryBrand: 0,
	person_grey130: 0,
	person_white: 0,
	openInNew_primaryBrand: 0,
	timer_primaryBrand: 0,
	bookMark_primaryBrand: 0,
	bookMark_grey60: 0,
};
IconNameList.forEach(
	(name) => (IconsRequireObject[name] = require(`../assets/images/${name}.png`))
);
export default IconsRequireObject;
