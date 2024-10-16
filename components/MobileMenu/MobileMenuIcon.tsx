import clsx from 'clsx'

interface Props {
    className?: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function MobileMenuIcon(props: Props) {
    const className = clsx(
        'inline-flex h-[2rem] items-center justify-center rounded-2xl bg-[--mobileMenuIconBoxColor] px-4 hover:bg-[--mobileMenuIconBoxHoverColor] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500',
        props.className
    )

    const barColor = 'bg-[--mobileMenuBarColor]'

    return (
        <button type="button" className={className} onClick={props.onClick}>
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
            <span className="space-y-[0.14rem]">
                <span
                    className={`block h-0.5 w-4 rounded-lg ${barColor}`}></span>
                <span
                    className={`block h-0.5 w-4 rounded-lg ${barColor}`}></span>
                <span
                    className={`block h-0.5 w-4 rounded-lg ${barColor}`}></span>
            </span>
        </button>
    )
}
