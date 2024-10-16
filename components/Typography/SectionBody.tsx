import clsx from 'clsx'

interface Props {
    className?: string
    children: React.ReactNode
}

export function SectionBody(props: Props) {
    const className = clsx(
        props.className,
        'text-lg leading-8 text-[--sectionBodyColor]'
    )

    return <div className={className}>{props.children}</div>
}
