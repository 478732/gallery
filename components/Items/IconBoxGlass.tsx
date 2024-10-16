import clsx from 'clsx'

interface Props {
    className?: string
    children: React.ReactNode
}

export function IconBoxGlass(props: Props) {
    const className = clsx(
        props.className,
        'flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10'
    )

    return <div className={className}>{props.children}</div>
}
