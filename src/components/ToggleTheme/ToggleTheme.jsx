import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ToggleTheme = () => {
    const pageClasses = document.documentElement.classList

    const toggle = () => {
        pageClasses.toggle('dark')
    }

    return (
        <div className="sm:block" data-testid="toggle_theme">
            <MoonIcon className="h-8 text-gray-800 block dark:hidden cursor-pointer" onClick={toggle} />
            <SunIcon className="h-8 text-gray-200 hidden dark:block cursor-pointer" onClick={toggle} />
        </div>
	)
}

export default ToggleTheme;