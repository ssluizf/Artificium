import { InputHTMLAttributes } from "react";

type CheckboxProps = {
  label: string;
};

export default function Checkbox({
  label,
  ...props
}: CheckboxProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <input type="checkbox" {...props}></input>
      <label htmlFor={props.id}>{label}</label>
    </div>
  );
}
