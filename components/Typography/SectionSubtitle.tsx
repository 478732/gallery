import clsx from 'clsx'

interface Props {
    tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string
    children: React.ReactNode
}

export function SectionSubtitle({
    tag: Tag = 'h2',
    className,
    children,
}: Props) {
    const joinedClassName = clsx(
        className,
        'text-base font-semibold leading-7 text-[--sectionSubtitleColor]'
    )

    return <Tag className={joinedClassName}>{children}</Tag>
}
