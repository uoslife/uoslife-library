/* eslint-disable @typescript-eslint/no-explicit-any */
import { Protocol, RequestProps } from "../protocols";
import { ProtocolNamesType } from "../protocols/types";
import { EnvironmentType, IDriver } from "./types";

export class Driver implements IDriver {
	private _isInstalled: boolean = false;
	private readonly requests: Map<string, RequestProps<any, any>> = new Map();
	private _reciver: Window | Document = window;

	install() {
		if (this.isInstalled) {
			console.log("이미 드라이버가 설치되어 있습니다.");
			return this;
		}
		const environment = this.getCurrentEnvironment();

		switch (environment) {
			case "web":
				console.log("웹 환경에서는 드라이버를 사용할 수 없습니다.");
				return;
			case "ios":
				this.reciver = window;
				break;
			case "android":
				this.reciver = document;
				break;
		}
		this.reciver.addEventListener("message", (e) => this.onMessage(e));
		this.isInstalled = true;
		return this;
	}

	unInstall() {
		this.reciver?.removeEventListener("message", (e) => this.onMessage(e));
		this.isInstalled = false;
	}

	request<U>(name: ProtocolNamesType): Promise<U> {
		const protocol = new Protocol<U>({ name });

		//@ts-expect-error: window has ReactNativeWebview
		window.ReactNativeWebView.postMessage(protocol.toMessage());

		return new Promise((resolve, reject) => {
			this.requests.set(protocol.id, { protocol, resolve, reject });
		});
	}

	private onMessage(message: MessageEvent): void {
		const protocol = new Protocol(JSON.parse(message.data));
		const request = this.requests.get(protocol.id);

		if (!request) {
			console.log("요청이 존재하지 않습니다.");
		} else {
			request.resolve(protocol.payload);
			this.requests.delete(protocol.id);
		}
	}

	get isInstalled() {
		return this._isInstalled;
	}
	set isInstalled(val: boolean) {
		this._isInstalled = val;
	}
	get reciver() {
		return this._reciver;
	}
	set reciver(val: Window | Document) {
		this._reciver = val;
	}

	getCurrentEnvironment(): EnvironmentType {
		switch (window.navigator.userAgent) {
			case "ios":
				return "ios";
			case "android":
				return "android";
			default:
				return "web";
		}
	}
}

export const installUoslifeDriver = () => {
	return { driver: new Driver().install() };
};

export const unInstallUoslifeDriver = () => {
	return { driver: new Driver().unInstall() };
};
