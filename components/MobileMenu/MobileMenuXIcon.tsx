import { XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

interface Props {
    className?: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function MobileMenuXIcon(props: Props) {
    const className = clsx(props.className, 'rounded-md text-gray-700')

    return (
        <button type="button" className={className} onClick={props.onClick}>
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
    )
}
