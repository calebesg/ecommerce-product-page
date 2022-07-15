import classNames from 'classnames'
import Image from 'next/image'

interface TabsButtonProps {
  index: number
  thumb: string
  active: boolean
  onClick: (index: number) => void
}

export default function TabsButton({
  thumb,
  onClick,
  active,
  index,
}: TabsButtonProps) {
  return (
    <button
      onClick={() => onClick(index)}
      className={classNames(
        'w-[88px] h-[88px] rounded-2xl hover:scale-[1.1] transition-all overflow-hidden relative',
        {
          'border-2 border-orange-500 after:inset-0 after:absolute after:bg-white after:opacity-60':
            active,
        }
      )}
    >
      <Image
        src={thumb}
        width={100}
        height={100}
        objectFit="contain"
        alt="Sneakers Min"
      />
    </button>
  )
}
