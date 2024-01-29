import WebView from "react-native-webview";
import { useEffect, useRef } from "react";
import { BackHandler, Platform } from "react-native";

const useAndroidBackPress = (
	webViewRef: ReturnType<typeof useRef<WebView>>
) => {
	// const webViewRef = useRef<WebView>();
	const onAndroidBackPress = () => {
		if (webViewRef.current) {
			webViewRef.current.goBack();
			return true; // prevent default behavior (exit app)
		}
		return false;
	};

	useEffect(() => {
		if (Platform.OS === "android") {
			BackHandler.addEventListener("hardwareBackPress", onAndroidBackPress);
			return () => {
				BackHandler.removeEventListener(
					"hardwareBackPress",
					onAndroidBackPress
				);
			};
		}
	}, []);
};

export default useAndroidBackPress;
