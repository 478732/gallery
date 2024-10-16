import clsx from 'clsx'

interface Props {
    className?: string
    children: React.ReactNode
}

export function SectionBodySmall(props: Props) {
    const className = clsx(
        props.className,
        'text-base leading-7 text-[--sectionBodyColor]'
    )

    return <div className={className}>{props.children}</div>
}
