import classNames from 'classnames'

interface ButtonProps {
  onClick: () => void
  text: string
  icon?: any
  shadow: boolean
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={classNames(
        'w-full lg:flex-1 h-14 flex items-center justify-center gap-4 font-bold rounded-xl bg-orange-500 hover:bg-orange-600 transition-colors text-white',
        {
          'shadow-button': props.shadow,
        }
      )}
    >
      {props.icon ? <props.icon size={18} weight="bold" /> : false}
      <span>{props.text}</span>
    </button>
  )
}
