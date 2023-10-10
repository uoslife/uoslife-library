import styled, { css } from "@emotion/native";
import { Icon, IconsNameType, colors, colorsType, typographs } from "../../..";
import { TouchableHighlightProps, View } from "react-native";
import { useState } from "react";

export type ButtonProps = {
	label: string;
	size?: "small" | "medium" | "large" | "x-large";
	variant?: "filled" | "outline" | "text";
	isEnabled?: boolean;
	isRounded?: boolean;
	isFullWidth?: boolean;
	iconName?: IconsNameType;
	onPress?: () => void;
} & Omit<TouchableHighlightProps, "onPress">;

const buttonStateToColor = (
	isEnabled: ButtonProps["isEnabled"],
	isPressed: boolean
) => {
	/** disabled */
	if (!isEnabled) return colors.grey40;

	/** pressed */
	if (isPressed) return colors.primaryUi;
	/** enabled */
	return colors.primaryBrand;
};

const buttonStateToUnderlayColor = (
	variant: ButtonProps["variant"],
	isEnabled: ButtonProps["isEnabled"]
) => {
	if (!isEnabled) {
		if (variant !== "filled") return colors.white;
		return colors.grey40;
	}
	if (variant === "filled") return colors.primaryUi;

	return colors.primaryLighterAlt;
};

const sizeToPadding = (size: ButtonProps["size"]) => {
	switch (size) {
		case "small":
			return "8px 16px";
		case "medium":
			return "10px 20px";
		case "large":
			return "12px 24px";
		case "x-large":
			return "16px 24px";
	}
};

const sizeToTypograph = (size: ButtonProps["size"]) => {
	switch (size) {
		case "small":
			return typographs.bodySmall;
		case "medium":
			return typographs.bodyMedium;
		case "large":
			return typographs.bodyLarge;
		case "x-large":
			return typographs.titleMedium;
	}
};

export const Button = ({
	label,
	size = "large",
	variant = "filled",
	isEnabled = true,
	isRounded = false,
	isFullWidth = false,
	iconName,
	onPress,
	style,
	...props
}: ButtonProps) => {
	const [isPressed, setIsPressed] = useState(false);

	return (
		<View>
			<S.ButtonWrapper
				onPress={onPress}
				size={size}
				variant={variant}
				isEnabled={isEnabled}
				isRounded={isRounded}
				isFullWidth={isFullWidth}
				onHideUnderlay={() => {
					setIsPressed(false);
				}}
				onShowUnderlay={() => {
					setIsPressed(true);
				}}
				{...props}
				isPressed={isPressed}
				style={[
					isFullWidth
						? css`
								width: 100%;
						  `
						: css`
								align-self: center;
						  `,
					{ ...(style as object) },
				]}
				underlayColor={buttonStateToUnderlayColor(variant, isEnabled)}
			>
				<S.ButtonInnerWrapper size={size}>
					{!!iconName && (
						<Icon
							name={iconName}
							width={24}
							height={24}
							color_rgb={
								variant === "filled"
									? (colors.white as colorsType)
									: (buttonStateToColor(isEnabled, isPressed) as colorsType)
							}
						/>
					)}
					<S.ButtonText
						variant={variant}
						isEnabled={isEnabled}
						isPressed={isPressed}
						style={sizeToTypograph(size)}
					>
						{label}
					</S.ButtonText>
				</S.ButtonInnerWrapper>
			</S.ButtonWrapper>
		</View>
	);
};

const S = {
	ButtonWrapper: styled.TouchableHighlight<
		Pick<
			ButtonProps,
			"size" | "variant" | "isEnabled" | "isRounded" | "isFullWidth"
		> & {
			isPressed: boolean;
		}
	>`
		padding: ${({ size }) => sizeToPadding(size)};
		border-radius: ${({ isRounded }) => (!isRounded ? "12px" : "100px")};

		${({ variant, isEnabled, isPressed }) => [
			variant === "outline" &&
				css`
					border: 1px solid ${buttonStateToColor(isEnabled, isPressed)};
				`,
			variant === "filled" &&
				css`
					background-color: ${buttonStateToColor(isEnabled, isPressed)};
				`,
		]};
	`,
	ButtonInnerWrapper: styled.View<Pick<ButtonProps, "size">>`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: ${({ size }) => (size === "small" ? "2px" : "4px")};
	`,
	ButtonText: styled.Text<
		Pick<ButtonProps, "variant" | "isEnabled"> & { isPressed: boolean }
	>`
		color: ${({ variant, isEnabled, isPressed }) =>
			variant === "filled"
				? colors.white
				: buttonStateToColor(isEnabled, isPressed)};
	`,
};
