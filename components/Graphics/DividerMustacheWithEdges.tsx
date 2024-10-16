interface Props {
    className?: string
    pathOneClassName?: string
    pathTwoClassName?: string
    pathThreeClassName?: string
    pathFourClassName?: string
}

export function DividerMustacheWithEdges({
    className,
    pathOneClassName = 'text-gray-50',
    pathTwoClassName = 'text-secondary-400',
    pathThreeClassName = 'text-secondary-600',
    pathFourClassName = 'text-primary-900',
}: Props) {
    return (
        <>
            <svg
                className={className}
                viewBox="0 336 960 104"
                // width="960"
                // height="540"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                aria-hidden="true">
                <path
                    className={`-translate-y-1 ${pathFourClassName}`}
                    d="M0 376L22.8 384.5C45.7 393 91.3 410 137 409.2C182.7 408.3 228.3 389.7 274 395C319.7 400.3 365.3 429.7 411.2 432.5C457 435.3 503 411.7 548.8 409.5C594.7 407.3 640.3 426.7 686 440C731.7 453.3 777.3 460.7 823 443.2C868.7 425.7 914.3 383.3 937.2 362.2L960 341L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
                    fill="currentColor"
                    fillOpacity={0.7}
                    stroke-linecap="round"
                    stroke-linejoin="miter"></path>

                <path
                    className={`-translate-y-7 ${pathThreeClassName}`}
                    d="M0 375L21.5 393.7C43 412.3 86 449.7 128.8 466.3C171.7 483 214.3 479 257.2 473.5C300 468 343 461 385.8 469C428.7 477 471.3 500 514.2 497.7C557 495.3 600 467.7 642.8 460.7C685.7 453.7 728.3 467.3 771.2 470.5C814 473.7 857 466.3 878.5 462.7L900 459L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
                    fill="currentColor"
                    fillOpacity={0.5}
                    stroke-linecap="round"
                    stroke-linejoin="miter"></path>

                <path
                    className={`translate-y-4 ${pathTwoClassName}`}
                    d="M0 354L22.8 370.3C45.7 386.7 91.3 419.3 137 438.2C182.7 457 228.3 462 274 459.3C319.7 456.7 365.3 446.3 411.2 439.2C457 432 503 428 548.8 420.2C594.7 412.3 640.3 400.7 686 396.7C731.7 392.7 777.3 396.3 823 407.3C868.7 418.3 914.3 436.7 937.2 445.8L960 455L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="miter"></path>

                <path
                    className={pathOneClassName}
                    d="M0 405L22.8 412C45.7 419 91.3 433 137 437.7C182.7 442.3 228.3 437.7 274 427.7C319.7 417.7 365.3 402.3 411.2 395.3C457 388.3 503 389.7 548.8 398.3C594.7 407 640.3 423 686 431C731.7 439 777.3 439 823 429.8C868.7 420.7 914.3 402.3 937.2 393.2L960 384L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="miter"></path>
            </svg>
        </>
    )
}
