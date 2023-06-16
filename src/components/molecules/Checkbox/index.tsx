import { InputHTMLAttributes, ReactNode } from "react"
import Icon from "@/components/atoms/Icon"

type CheckboxProps = {
  children: ReactNode
}

export default function Checkbox({
  children,
  ...props
}: CheckboxProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex items-center space-x-4">
      <label
        className="relative cursor-pointer text-day-blue-900
          w-6 h-6 flex items-center"
        htmlFor="checkbox-field"
      >
        <input
          id="checkbox-field"
          data-test="checkbox"
          type="checkbox"
          className="peer w-full h-full cursor-pointer focus:ring-offset-0 focus:ring-transparent
            bg-noble-black-600 border border-solid border-noble-black-500 rounded
            hover:border-2 checked:bg-day-blue-blue-green-500 checked:text-day-blue-900"
          {...props}
        ></input>
        <Icon
          name="check"
          className="icon--bold invisible peer-checked:visible w-3 h-3
            absolute top-0 bottom-0 right-0 left-0 m-auto"
        />
      </label>
      <label
        data-test="checkbox-label"
        className="select-none cursor-pointer text-body-l-medium text-noble-black-200"
        htmlFor="checkbox-field"
      >
        {children}
      </label>
    </div>
  )
}
