"use client"

import { ForwardedRef, InputHTMLAttributes, ReactNode, forwardRef } from "react"
import Icon from "@/components/atoms/Icon"

type CheckboxProps = {
  children: ReactNode
}

const Checkbox = forwardRef(function Checkbox(
  { children, ...props }: CheckboxProps & InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className="flex items-center space-x-2 sm:space-x-4">
      <label
        className="relative flex
          h-5 w-5 sm:h-6 sm:w-6 cursor-pointer items-center text-day-blue-900"
        htmlFor="checkbox-field"
      >
        <input
          ref={ref}
          id="checkbox-field"
          data-test="checkbox"
          type="checkbox"
          className="peer h-full w-full cursor-pointer rounded border
            border-solid border-noble-black-500 bg-noble-black-600 checked:bg-day-blue-blue-green-500 checked:text-day-blue-900
            hover:border-2 focus:ring-transparent focus:ring-offset-0"
          {...props}
        ></input>
        <Icon
          name="check"
          className="icon--bold min-w-min invisible absolute bottom-0 left-0
            right-0 top-0 m-auto h-3 w-3 peer-checked:visible"
        />
      </label>
      <label
        data-test="checkbox-label"
        className="cursor-pointer select-none text-body-m-medium text-noble-black-200 sm:text-body-l-medium"
        htmlFor="checkbox-field"
      >
        {children}
      </label>
    </div>
  )
})

export default Checkbox
