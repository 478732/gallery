import clsx from 'clsx'

interface Props {
    className?: string
    children: React.ReactNode
}

export function SectionButtonGroup(props: Props) {
    const className = clsx(props.className, 'flex items-center gap-x-6')

    return <div className={className}>{props.children}</div>
}
