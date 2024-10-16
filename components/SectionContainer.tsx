import clsx from 'clsx'

interface Props {
    className?: string
    children: React.ReactNode
}

export function SectionContainer(props: Props) {
    const className = clsx(
        props.className,
        'mx-auto max-w-container px-6 lg:px-8'
    )

    return <div className={className}>{props.children}</div>
}
