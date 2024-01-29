import WebView, { WebViewMessageEvent } from "react-native-webview";
import { Protocol } from "../protocols";
import { ProtocolPayloadType } from "../protocols/types";

type OnMessageFromWebViewProps = WebViewMessageEvent &
	ProtocolPayloadType & {
		webviewRef: React.MutableRefObject<WebView<object> | null>;
		navigationGoBack: () => void;
	};

export const onMessageFromWebView = ({
	nativeEvent,
	webviewRef,
	userPayload,
	accessTokenPayload,
	navigationGoBack,
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
	}
};

export { default } from "./hooks";
