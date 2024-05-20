import { Driver } from "../driver";
import {
	AccessTokenType,
	PROTOCOL_NAME,
	RequestMeetingPaymentsPayloadType,
	UserInfoType,
} from "../protocols/types";
import { Bridge } from "./bridge";

type MakeUoslifeBridgeType = { driver: Driver };

export class UoslifeBridge extends Bridge {
	constructor(_driver: Driver) {
		super(_driver);
	}

	getAccessToken() {
		return super.driver.request<AccessTokenType>(
			PROTOCOL_NAME.USER_ACCESS_TOKEN
		);
	}
	getUserInfo() {
		return super.driver.request<UserInfoType>(PROTOCOL_NAME.USER_USER_INFO);
	}
	goBack() {
		return super.driver.request<null>(PROTOCOL_NAME.NAVIGATION_GO_BACK);
	}
	getInsets() {
		return super.driver.request<null>(PROTOCOL_NAME.DEVICE_INSETS);
	}
	requestMeetingPayments(payload: RequestMeetingPaymentsPayloadType) {
		return super.driver.request<RequestMeetingPaymentsPayloadType>(
			PROTOCOL_NAME.REQUEST_MEETING_PAYMENTS,
			payload
		);
	}
}

export const makeUoslifeBridge = ({ driver }: MakeUoslifeBridgeType) => {
	return new UoslifeBridge(driver);
};
