import { useId } from 'react'

interface Props {
    className?: string
    colorOne?: string
    colorTwo?: string
}

export const PatternDots = ({
    className,
    colorOne = 'text-primary-700',
    colorTwo = 'text-secondary-400',
}: Props) => {
    const patternId = useId()

    return (
        <svg
            className={className}
            width="100%"
            height="100%"
            fill="none"
            aria-hidden="true">
            <defs>
                <pattern
                    id={patternId}
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse">
                    <rect
                        x={0}
                        y={0}
                        rx={4}
                        ry={4}
                        width={4}
                        height={4}
                        className={colorOne}
                        fill="currentColor"
                    />
                    <rect
                        x={6}
                        y={6}
                        rx={4}
                        ry={4}
                        width={4}
                        height={4}
                        className={colorTwo}
                        fill="currentColor"
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
    )
}
