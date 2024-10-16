import clsx from 'clsx'

interface Props {
    className?: string
    align?: string
    children: React.ReactNode
}

export function SectionColumnsTwo({
    className,
    align = 'lg:items-start',
    children,
}: Props) {
    const joinedClassName = clsx(
        className,
        align,
        'mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'
    )

    return <div className={joinedClassName}>{children}</div>
}
