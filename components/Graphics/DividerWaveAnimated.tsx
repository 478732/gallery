import '@/styles/divider-wave-animation.css'
import clsx from 'clsx'

interface Props {
    className?: string
}

export function DividerWaveAnimated(props: Props) {
    const className = clsx(
        props.className,
        'h-[40px] max-h-[150px] min-h-[40px] w-full md:h-[15vh] md:min-h-[100px]'
    )

    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
            aria-hidden="true">
            <defs>
                <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
            </defs>
            <g className="divider-animation">
                <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="0"
                    fill="currentColor"
                    className="text-white/70"
                />
                <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="3"
                    fill="currentColor"
                    className="text-white/50"
                />
                <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="5"
                    fill="currentColor"
                    className="text-white/30"
                />
                <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="7"
                    fill="currentColor"
                    className="text-gray-50"
                />
            </g>
        </svg>
    )
}
