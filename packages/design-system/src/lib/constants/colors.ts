const white = "#FFFFFF";
const black = "#000000";

const primary = {
	light: "#BFDFFF",
	normal: "#4686FF",
	strong: "#305ADC",
};

const accent = {
	light: "#FCECB8",
	normal: "#F8D45E",
	strong: "#F5B32A",
};

const text = {
	normal: "#272727",
	strong: black,
};

export const colors = {
	white,
	black,
	grey: text.normal,

	blue50: "#E4F2FF",
	blue100: primary.light,
	blue200: "#97CBFF",
	blue300: "#6DB6FF",
	blue400: "#53A6FF",
	blue500: "#4496FF",
	blue600: primary.normal,
	blue700: "#4574EA",
	blue800: primary.strong,
	blue900: "#3240B7",
	yellow50: "#FDF8E3",
	yellow100: accent.light,
	yellow200: "#FADF8A",
	yellow300: accent.normal,
	yellow400: "#F7C941",
	yellow500: "#F6C02F",
	yellow600: accent.strong,
	yellow700: "#F4A125",
	yellow800: "#F39121",
	yellow900: "#F27419",

	primaryLight: primary.light,
	primaryNormal: primary.normal,
	primaryStrong: primary.strong,
	accentLight: accent.light,
	accentNormal: accent.normal,
	acccentStrong: accent.strong,
	textNormal: text.normal,
	textStrong: text.strong,
};
