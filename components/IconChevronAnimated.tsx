import clsx from 'clsx'

interface Props {
    className?: string
    color: string
}

export function IconChevronAnimated(props: Props) {
    const className = clsx(props.className, props.color, 'stroke-2')

    return (
        <svg
            className={className}
            fill="none"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            aria-hidden="true">
            <path
                className="opacity-0 transition group-hover:opacity-100"
                d="M0 5h7"></path>
            <path
                className="transition group-hover:translate-x-[3px]"
                d="M1 1l4 4-4 4"></path>
        </svg>
    )
}
