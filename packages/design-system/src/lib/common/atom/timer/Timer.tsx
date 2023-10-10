import { Txt, TxtProps } from "../.";

type Props = {
	currentTime: string;
} & Omit<TxtProps, "label" | "color" | "typograph">;

export const Timer = ({ currentTime, ...props }: Props) => {
	return (
		<Txt
			label={currentTime}
			color={"grey190"}
			typograph={"titleMedium"}
			{...props}
		/>
	);
};
