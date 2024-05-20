import WebView, { WebViewMessageEvent } from "react-native-webview";
import { Protocol } from "../protocols";
import {
	ProtocolPayloadType,
	RequestMeetingPaymentsPayloadType,
} from "../protocols/types";

type OnMessageFromWebViewProps = WebViewMessageEvent &
	ProtocolPayloadType & {
		webviewRef: React.MutableRefObject<WebView<object> | null>;
		navigationGoBack: () => void;
		onRequestMeetingPayments: (
			payload: RequestMeetingPaymentsPayloadType
		) => void;
	};

export const onMessageFromWebView = ({
	nativeEvent,
	webviewRef,
	userPayload,
	accessTokenPayload,
	navigationGoBack,
	insetsPayload,
	onRequestMeetingPayments,
}: OnMessageFromWebViewProps) => {
	const protocol = new Protocol(JSON.parse(nativeEvent.data));
	switch (protocol.name) {
		case "user.accessToken":
			webviewRef.current?.postMessage(
				JSON.stringify({ ...protocol, payload: { ...accessTokenPayload } })
			);
			return;
		case "user.userInfo":
			webviewRef.current?.postMessage(
				JSON.stringify({ ...protocol, payload: { ...userPayload } })
			);
			return;
		case "navigation.goBack":
			navigationGoBack();
			return;
		case "device.insets":
			webviewRef.current?.postMessage(
				JSON.stringify({ ...protocol, payload: { ...insetsPayload } })
			);
			return;
		case "meeting.requestPayments":
			onRequestMeetingPayments(
				protocol.payload as RequestMeetingPaymentsPayloadType
			);
			return;
	}
};

export { useAndroidBackPress } from "./hooks";
