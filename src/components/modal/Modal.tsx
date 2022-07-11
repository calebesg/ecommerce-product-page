import { X } from 'phosphor-react'

interface ModalProps {
  opened: boolean
  closeModal: () => void
  children: any
}

export function Modal({ children, opened, closeModal }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-grayish_blue-800/80 backdrop-blur-sm transition-all ${
        opened ? 'opacity-100 z-10' : 'opacity-0 -z-10'
      }`}
    >
      <button
        onClick={closeModal}
        className="absolute top-6 right-6 text-white"
      >
        <X size={32} weight="bold" />
      </button>
      {children}
    </div>
  )
}
