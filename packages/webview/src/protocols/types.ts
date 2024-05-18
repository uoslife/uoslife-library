// enum 사용시 빌드 단계에서 에러 발생
export const PROTOCOL_NAME = {
	USER_ACCESS_TOKEN: "user.accessToken" as const,
	USER_USER_INFO: "user.userInfo" as const,
	NAVIGATION_GO_BACK: "navigation.goBack" as const,
	DEVICE_INSETS: "device.insets" as const,
	REQUEST_MEETING_PAYMENTS: "meeting.requestPayments" as const,
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

export type RequestMeetingPaymentsPayloadType = {
	data: IPaymentData;
	userCode: string;
};

export interface IPaymentData {
	pg: string;
	pay_method: string;
	currency?: string;
	notice_url?: string | string[];
	display?: {
		card_quota: number[];
	};
	merchant_uid: string;
	amount: string | number;
	buyer_tel: string;
	app_scheme?: string;
	escrow: boolean;
	name: string;
	tax_free?: number;
	buyer_name: string;
	buyer_email: string;
	buyer_addr?: string;
	buyer_postcode?: string;
	custom_data?: object;
	vbank_due?: string;
	popup?: boolean;
	digital?: boolean;
	language?: string;
	biz_num?: string;
	customer_uid?: string;
	naverPopupMode?: boolean;
	naverUseCfm?: string;
	naverProducts?: object[];
	m_redirect_url?: string;
	niceMobileV2?: boolean;
	bypass?: {
		daou?: {
			PRODUCTCODE?: string;
			CASHRECEIPTFLAG: number;
		};
	};
}
