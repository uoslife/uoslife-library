import { useEffect, useState } from "react";

type useTimerProps = {
	initMin: number;
	initSec: number;
	autoStart?: boolean;
};

const addZero = (num: number) => {
	if (num < 10) return "0" + num.toString();
	else return num.toString();
};

export const useTimer = ({
	initMin,
	initSec,
	autoStart = true,
}: useTimerProps) => {
	const [min, setMin] = useState(initMin);
	const [sec, setSec] = useState(initSec);
	const [isStart, setIsStart] = useState(autoStart);
	const [isFinish, setIsFinish] = useState(false);

	const startTimer = () => {
		setIsStart(true);
	};

	const resetTimer = () => {
		setMin(initMin);
		setSec(initSec);
	};

	useEffect(() => {
		if (!isStart) return;
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
	return { currentTime, isFinish, startTimer, resetTimer };
};
