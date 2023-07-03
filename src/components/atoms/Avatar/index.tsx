/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image"

export default function Avatar({ className = "", ...props }: ImageProps) {
  return (
    <Image
      className={`bg-noble-black-400 object-cover ${className}`}
      {...props}
    />
  )
}
