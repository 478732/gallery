import { useId } from 'react'

interface Props {
    viewBox?: string
    className?: string
    pathOneClassName?: string
    pathTwoClassName?: string
    pathThreeClassName?: string
    pathFourClassName?: string
}

export function DividerFooter({
    viewBox = '0 363 960 89',
    className,
    pathOneClassName,
    pathTwoClassName,
    pathThreeClassName,
    pathFourClassName,
}: Props) {
    const pathId = useId()

    return (
        <>
            <svg
                className={className}
                viewBox={viewBox}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                preserveAspectRatio="none"
                aria-hidden="true">
                <defs>
                    <path
                        d="M0 405L22.8 412C45.7 419 91.3 433 137 437.7C182.7 442.3 228.3 437.7 274 427.7C319.7 417.7 365.3 402.3 411.2 395.3C457 388.3 503 389.7 548.8 398.3C594.7 407 640.3 423 686 431C731.7 439 777.3 439 823 429.8C868.7 420.7 914.3 402.3 937.2 393.2L960 384L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
                        id={pathId}
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="miter"></path>
                </defs>
                <use
                    href={`#${pathId}`}
                    className={`-translate-y-[1.25rem] text-primary-600 min-[590px]:-translate-y-[1.1rem] sm:text-primary-300 md:-translate-y-[0.65rem] ${pathFourClassName}`}
                />
                <use
                    href={`#${pathId}`}
                    className={`text-gray-50 ${pathThreeClassName}`}
                />
                <use
                    href={`#${pathId}`}
                    className={`translate-y-[0.8rem] text-primary-400 min-[590px]:translate-y-[0.75rem] sm:text-primary-800 md:translate-y-[0.45rem] ${pathTwoClassName}`}
                />
                <use
                    href={`#${pathId}`}
                    className={`translate-y-[2rem] text-primary-600 min-[590px]:translate-y-[1.85rem] sm:text-primary-950 md:translate-y-[1.15rem] ${pathOneClassName}`}
                />
            </svg>
        </>
    )
}
