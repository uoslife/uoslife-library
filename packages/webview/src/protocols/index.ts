import uuid from "uuid-random";
import { ProtocolNamesType } from "./types";

export type RequestProps<U, D> = {
	protocol: Protocol<U>;
	resolve: (value: D) => void;
	reject: (reason: string) => void;
};

export type ProtocolProps<T> = {
	id?: string;
	name: ProtocolNamesType;
	payload?: T;
};

export class Protocol<T> {
	id: string;
	name: ProtocolNamesType;
	payload: T | object;

	constructor(data: ProtocolProps<T>) {
		this.id = data.id ?? uuid();
		this.name = data.name;
		this.payload = data.payload ?? {};
	}

	toMessage(): string {
		return JSON.stringify(this);
	}
}
