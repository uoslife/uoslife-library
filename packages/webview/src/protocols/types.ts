// enum 사용시 빌드 단계에서 에러 발생
export const PROTOCOL_NAME = {
	USER_ACCESS_TOKEN: "user.accessToken" as const,
	USER_USER_INFO: "user.userInfo" as const,
	NAVIGATION_GO_BACK: "navigation.goBack" as const,
};

export type ProtocolNamesType =
	(typeof PROTOCOL_NAME)[keyof typeof PROTOCOL_NAME];

export type UserInfoType = {
	id: number;
	name: string;
	nickname: string;
	birthday: string;
	phone: string;
	avatarUrl: string;
	isVerified: boolean;
	degree: string;
	enrollmentStatus: string;
	studentId: string;
	departmentName: string;
	collegeName: string;
};

export type AccessTokenType = {
	accessToken?: string;
};

export type ProtocolPayloadType = {
	userPayload: UserInfoType | null;
	accessTokenPayload: AccessTokenType;
};
