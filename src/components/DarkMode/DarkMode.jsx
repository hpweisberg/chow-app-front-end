import { useState } from "react";
import { Switch } from "@headlessui/react";

const DarkMode = ({ handleThemeSwitch, darkEnabled }) => {
  // const [enabled, setEnabled] = useState(false)

  const handleSwitch = () => {
    // setEnabled(!enabled)
    handleThemeSwitch()
  }

  return (
    <Switch
      checked={darkEnabled}
      onChange={handleSwitch}
      className={`${darkEnabled ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-20 items-center rounded-full`}
    >
      <span className="sr-only">Enable dark mode</span>
      <span
        className={`${darkEnabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
}

export default DarkMode;