type ModalProps = {
  children: React.ReactNode
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="fixed left-0 top-0 h-screen w-screen bg-noble-black-900/60 backdrop-blur-sm">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-min w-auto max-w-2xl border-t-glass-stroke
        bg-glass-modal p-6 shadow-glass-modal sm:w-4/5 sm:rounded-2xl sm:p-10 lg:w-3/5"
      >
        {children}
      </div>
    </div>
  )
}
