import { useCallback, useEffect, useState } from "react";

export const useTimer = (initMin: number, initSec: number) => {
	const [min, setMin] = useState(initMin);
	const [sec, setSec] = useState(initSec);
	const [isFinish, setIsFinish] = useState(false);

	const addZero = useCallback((num: number) => {
		if (num < 10) return "0" + num.toString();
		else return num.toString();
	}, []);

	useEffect(() => {
		const countDown = setInterval(() => {
			if (sec === 0 && min === 0) {
				setIsFinish(true);
				return;
			}
			if (sec === 0) {
				setMin((prev) => prev - 1);
				setSec(59);
				return;
			}
			setSec((prev) => prev - 1);
		}, 1000);
		return () => clearInterval(countDown);
	});
	const currentTime = addZero(min) + ":" + addZero(sec);
	return { currentTime, isFinish };
};
