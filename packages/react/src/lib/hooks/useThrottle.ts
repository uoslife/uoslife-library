/* eslint-disable @typescript-eslint/ban-types */

import { useRef } from "react";

const THROTTLE_DEFAULT_TIME = 1 * 1000;

export const useThrottle = <T extends unknown[]>(
	callback: (...params: T) => void,
	throttleTime: number | undefined = THROTTLE_DEFAULT_TIME
): (() => void) => {
	const timer = useRef<ReturnType<Date["valueOf"]>>(0);

	return (...params: T) => {
		const callbackExecutionTime = new Date().valueOf();

		if (callbackExecutionTime - timer.current < throttleTime) return;

		timer.current = callbackExecutionTime;
		callback(...params);
	};
};
