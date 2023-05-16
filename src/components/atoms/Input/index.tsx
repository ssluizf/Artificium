import { InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
  icon: string;
};

export default function Input({
  label,
  ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
    </div>
  );
}
