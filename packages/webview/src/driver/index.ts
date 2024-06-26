/* eslint-disable @typescript-eslint/no-explicit-any */
import { Protocol, RequestProps } from "../protocols";
import { ProtocolNamesType } from "../protocols/types";
import { getOSByUserAgent } from "../utils/getOsByUserAgent";
import { IDriver } from "./types";

export class Driver implements IDriver {
	private _isInstalled: boolean = false;
	private readonly requests: Map<string, RequestProps<any, any>> = new Map();
	private _reciver: Window | Document = window;

	install() {
		if (this.isInstalled) {
			console.log("이미 드라이버가 설치되어 있습니다.");
			return this;
		}
		const environment = getOSByUserAgent();

		switch (environment) {
			case "web":
				console.log("웹 환경에서는 드라이버를 사용할 수 없습니다.");
				return this;
			case "ios":
				this.reciver = window;
				break;
			case "android":
				this.reciver = document;
				break;
			default:
				console.log("드라이버를 사용할 수 없습니다.");
		}
		this.reciver.addEventListener("message", (e) => this.onMessage(e));
		this.isInstalled = true;
		return this;
	}

	unInstall() {
		this.reciver?.removeEventListener("message", (e) => this.onMessage(e));
		this.isInstalled = false;
	}

	request<U>(name: ProtocolNamesType, payload?: U): Promise<U> {
		const protocol = new Protocol<U>({ name, payload });

		//@ts-expect-error: window has ReactNativeWebview
		window.ReactNativeWebView.postMessage(protocol.toMessage());

		return new Promise((resolve, reject) => {
			this.requests.set(protocol.id, { protocol, resolve, reject });
		});
	}

	private onMessage(message: MessageEvent | Event): void {
		const msg = message as MessageEvent;
		const protocol = new Protocol(JSON.parse(msg.data));
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
}

export const installUoslifeDriver = () => {
	return { driver: new Driver().install() };
};

export const unInstallUoslifeDriver = () => {
	return { driver: new Driver().unInstall() };
};
