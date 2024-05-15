// enum 사용시 빌드 단계에서 에러 발생
export const PROTOCOL_NAME = {
	USER_ACCESS_TOKEN: "user.accessToken" as const,
	USER_USER_INFO: "user.userInfo" as const,
	NAVIGATION_GO_BACK: "navigation.goBack" as const,
	DEVICE_INSETS: "device.insets" as const,
};

export type ProtocolNamesType =
	(typeof PROTOCOL_NAME)[keyof typeof PROTOCOL_NAME];

export type UserInfoType = {
	id: number;
	nickname: string;
	name: string;
	email: string;
	identity: {
		id: string;
		type: string;
		status: string;
		idNumber: string;
		university: string;
		department: string;
		major: string;
	};
	moderator: {
		generation: string;
		chapter: string;
		role: string;
	};
	isLinkedPortal: boolean;
	isVerified: boolean;
	verificationMethod: string;
};

export type AccessTokenType = {
	accessToken?: string;
};

export type ProtocolPayloadType = {
	userPayload: UserInfoType | null;
	accessTokenPayload: AccessTokenType;
	insetsPayload?: EdgeInsets;
};

export type EdgeInsets = {
	top: number;
	right: number;
	bottom: number;
	left: number;
};
