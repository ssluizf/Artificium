type ModalProps = {
  children: React.ReactNode
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="fixed bg-noble-black-900/60 backdrop-blur-sm left-0 top-0 h-screen w-screen">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-min w-1/2
        rounded-2xl border-t-glass-stroke bg-glass-modal shadow-glass-modal p-10"
      >
        {children}
      </div>
    </div>
  )
}
