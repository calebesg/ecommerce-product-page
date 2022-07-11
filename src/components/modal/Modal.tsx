import classNames from 'classnames'

interface ModalProps {
  opened: boolean
  children: any
}

export function Modal({ children, opened }: ModalProps) {
  return (
    <div
      className={classNames('transition-all fixed inset-0 bg-slate-500', {
        'opacity-100': opened,
      })}
    >
      {children}
      <div />
    </div>
  )
}
