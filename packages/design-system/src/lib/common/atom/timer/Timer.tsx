import { Txt, TxtProps } from "../.";

import { useTimer } from "@uoslife/react";

type Props = Omit<TxtProps, "label" | "color" | "typograph">;

const VERIFICATION_TIMER_MIN = 3;
const VERIFICATION_TIMER_SEC = 0;

export const Timer = ({ ...props }: Props) => {
	const { currentTime, isFinish } = useTimer(
		VERIFICATION_TIMER_MIN,
		VERIFICATION_TIMER_SEC
	);
	return (
		<Txt
			label={isFinish ? "done" : currentTime}
			color={"grey10"}
			typograph={"titleLarge"}
			{...props}
		/>
	);
};
