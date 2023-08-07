import { TextInputProps } from "react-native";
import styled, { css } from "@emotion/native";
import { Txt } from "../txt/Txt";

type Props = {
	placeholder?: string;
	onChangeInput?: TextInputProps["onChange"];
	children?: React.ReactNode;
} & TextInputProps;

export const Input = ({
	placeholder,
	onChangeInput,
	children,
	...props
}: Props) => {
	return (
		<S.inputWrapper>
			<S.textInput
				placeholder={placeholder}
				keyboardType="numeric"
				autoCapitalize="characters"
				onChange={onChangeInput}
				{...props}
			></S.textInput>
			{children}
		</S.inputWrapper>
	);
};

const S = {
	inputWrapper: styled.View`
		position: relative;
		width: 364px;
		height: 62px;
	`,
	textInput: styled.TextInput`
		height: 100%;
		width: 100%;
		color: grey;
		border-radius: 15px;
		border: 1px solid #000;
		padding: 19px;
	`,
};
