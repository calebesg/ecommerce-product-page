import { Switch } from '@headlessui/react'
import classNames from 'classnames'

interface ToggleButtonProps {
  onChange: () => void
  active: boolean
}

export default function ToggleButton({ onChange, active }: ToggleButtonProps) {
  const toggleEnabled = (value: boolean) => onChange()

  return (
    <Switch
      checked={active}
      onChange={toggleEnabled}
      className={classNames(
        'relative inline-flex h-6 w-11 items-center rounded-full',
        {
          'bg-orange-500': active,
          'bg-orange-200': !active,
        }
      )}
    >
      <span className="sr-only">Enable dark mode</span>
      <span
        className={classNames(
          'inline-block h-4 w-4 rounded-full bg-white transform transition-all',
          {
            'translate-x-6': active,
            'translate-x-1': !active,
          }
        )}
      />
    </Switch>
  )
}
