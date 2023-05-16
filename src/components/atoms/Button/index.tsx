import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  label: string;
  variant: string;
  icon: string;
};

export default function Button({
  label,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div>
      <button {...props}>{label}</button>
    </div>
  );
}
