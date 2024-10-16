import clsx from 'clsx'

interface Props {
    className?: string
    children: React.ReactNode
}

export function IconBox(props: Props) {
    const className = clsx(
        props.className,
        'flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600'
    )

    return <div className={className}>{props.children}</div>
}
