import clsx from 'clsx'

interface Props {
    tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string
    children: React.ReactNode
}

export function SectionTitleBig({
    tag: Tag = 'h1',
    className,
    children,
}: Props) {
    const joinedClassName = clsx(
        className,
        'text-4xl font-bold tracking-tight text-[--sectionTitleColor] sm:text-5xl'
    )

    return <Tag className={joinedClassName}>{children}</Tag>
}
