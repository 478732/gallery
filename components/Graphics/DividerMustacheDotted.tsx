import { useId } from 'react'

interface Props {
    viewBox?: string
    className?: string
    pathOneClassName?: string
    pathTwoClassName?: string
    pathThreeClassName?: string
    pathFourClassName?: string
    pathFourStrokeWidth?: number
}

export function DividerMustacheDotted({
    viewBox = '0 367 960 89',
    className,
    pathOneClassName = 'text-gray-50',
    pathTwoClassName = 'text-primary-950',
    pathThreeClassName = 'text-white',
    pathFourClassName = 'stroke-secondary-400 text-transparent',
    pathFourStrokeWidth = 2,
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
                    className={`${pathFourClassName} -translate-y-4`}
                    strokeWidth={pathFourStrokeWidth}
                    strokeDasharray="0 27.3"
                />
                <use href={`#${pathId}`} className={`${pathThreeClassName}`} />
                <use
                    href={`#${pathId}`}
                    className={`${pathTwoClassName} translate-y-2`}
                />
                <use
                    href={`#${pathId}`}
                    className={`${pathOneClassName} translate-y-4`}
                />
            </svg>
        </>
    )
}
