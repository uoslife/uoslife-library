import { Txt, TxtProps } from "@/lib/common";

type Props = Omit<TxtProps, "label" | "color" | "typograph">;

export const Timer = ({ ...props }: Props) => {
	// const VERIFICATION_TIMER_MIN = 3;
	// const VERIFICATION_TIMER_SEC = 0;

	// const { currentTime, isFinish } = useTimer(
	// 	VERIFICATION_TIMER_MIN,
	// 	VERIFICATION_TIMER_SEC
	// );
	return (
		<Txt
			label={"hi"}
			// label={isFinish ? "done" : currentTime}
			color={"grey"}
			typograph={"title1"}
			{...props}
		/>
	);
};
