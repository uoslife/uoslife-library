import { Txt, TxtProps } from "@/lib/common";
import { useCallback, useEffect, useState } from "react";

type Props = Omit<TxtProps, "label" | "color" | "typograph">;

const useTimer = (initMin: number, initSec: number) => {
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

export const Timer = ({ ...props }: Props) => {
	const VERIFICATION_TIMER_MIN = 3;
	const VERIFICATION_TIMER_SEC = 0;

	const { currentTime, isFinish } = useTimer(
		VERIFICATION_TIMER_MIN,
		VERIFICATION_TIMER_SEC
	);
	return (
		<Txt
			label={isFinish ? "done" : currentTime}
			color={"grey"}
			typograph={"title1"}
			{...props}
		/>
	);
};
