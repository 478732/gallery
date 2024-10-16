import clsx from 'clsx'

interface Props {
    className?: string
    children: React.ReactNode
    headerTheme?: string
}

export function Section({
    className,
    headerTheme = 'header-white',
    children,
}: Props) {
    const joinedClassName = clsx(className, 'relative')

    return (
        <section
            data-header-theme={headerTheme}
            data-type="section"
            className={joinedClassName}>
            {children}
        </section>
    )
}
