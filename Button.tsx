import React from "react";

type HtmlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonColor = "red" | "green" | "blue";

interface ButtonProps extends HtmlButtonProps {
  color?: ButtonColor;
}

const backgroundColors: Record<ButtonColor, string> = {
  red: "#ff6455",
  green: "#53ff95",
  blue: "#7ccfff",
};

const Button = ({ color = "red", ...rest }: ButtonProps) => {
  const background = backgroundColors[color];
  return <button style={{ background }} {...rest} />;
};

export default Button;
