import { useState } from "react";
import { Switch } from "@headlessui/react";
import classNames from "classnames";

interface ToggleButtonProps {
  onChange: () => void;
}

export default function ToggleButton({ onChange }: ToggleButtonProps) {
  const [enabled, setEnabled] = useState(false);

  const toggleEnabled = function (value: boolean) {
    setEnabled(value);
    onChange();
  };

  return (
    <Switch
      checked={enabled}
      onChange={toggleEnabled}
      className={classNames(
        "relative inline-flex h-6 w-11 items-center rounded-full",
        {
          "bg-orange-500": enabled,
          "bg-orange-200": !enabled,
        }
      )}
    >
      <span className="sr-only">Enable dark mode</span>
      <span
        className={classNames(
          "inline-block h-4 w-4 rounded-full bg-white transform transition-all",
          {
            "translate-x-6": enabled,
            "translate-x-1": !enabled,
          }
        )}
      />
    </Switch>
  );
}
