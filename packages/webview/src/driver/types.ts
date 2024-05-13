import { Driver } from ".";

export interface IDriver {
	/**
	 * 드라이버가 설치되어 있는지 확인합니다.
	 */
	isInstalled: boolean;

	/**
	 * 드라이버를 설치합니다.
	 */
	install(): Driver | undefined;

	/**
	 * 드라이버를 제거합니다.
	 */
	unInstall(): void;

	/**
	 * native client에 요청을 보냅니다.
	 */
	request<U, D>(name: string, payload: U): Promise<D>;
}
