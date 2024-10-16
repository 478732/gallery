import clsx from 'clsx'

interface Props {
    tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string
    children: React.ReactNode
}

export function SectionSubtitleBig({
    tag: Tag = 'h2',
    className,
    children,
}: Props) {
    const joinedClassName = clsx(
        className,
        'text-lg font-semibold leading-8 tracking-tight text-primary-600'
    )

    return <Tag className={joinedClassName}>{children}</Tag>
}
