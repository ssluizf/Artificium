type DividerProps = {
  children: React.ReactNode
}

export default function Divider({ children }: DividerProps) {
  return (
    <div className="flex w-full items-center justify-between space-x-4 text-noble-black-400">
      <hr className="w-full" />
      <span className="whitespace-nowrap text-body-s-medium">{children}</span>
      <hr className="w-full" />
    </div>
  )
}
