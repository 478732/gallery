interface Props {
    className?: string
    pathOneClassName?: string
    pathTwoClassName?: string
    pathThreeClassName?: string
}

export function DividerMustacheLeftWithEdges({
    className,
    pathOneClassName = 'text-gray-50',
    pathTwoClassName = 'text-primary-900',
    pathThreeClassName = 'text-secondary-400',
}: Props) {
    return (
        <>
            <svg
                className={className}
                viewBox="0 340 960 109"
                // width="960"
                // height="540"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                aria-hidden="true">
                <path
                    d="M0 376L22.8 384.5C45.7 393 91.3 410 137 409.2C182.7 408.3 228.3 389.7 274 395C319.7 400.3 365.3 429.7 411.2 432.5C457 435.3 503 411.7 548.8 409.5C594.7 407.3 640.3 426.7 686 440C731.7 453.3 777.3 460.7 823 443.2C868.7 425.7 914.3 383.3 937.2 362.2L960 341L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
                    className={`${pathThreeClassName}`}
                    fill="currentColor"
                    fillOpacity={0.5}
                    stroke-linecap="round"
                    stroke-linejoin="miter"
                />

                <path
                    className={`translate-y-2 ${pathTwoClassName}`}
                    d="M0 341L22.8 361.5C45.7 382 91.3 423 137 431.3C182.7 439.7 228.3 415.3 274 410.7C319.7 406 365.3 421 411.2 418.5C457 416 503 396 548.8 397.8C594.7 399.7 640.3 423.3 686 433.7C731.7 444 777.3 441 823 429C868.7 417 914.3 396 937.2 385.5L960 375L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="miter"
                />

                <path
                    className={pathOneClassName}
                    xmlns="http://www.w3.org/2000/svg"
                    d="M0 449L22.8 444C45.7 439 91.3 429 137 418.8C182.7 408.7 228.3 398.3 274 405.3C319.7 412.3 365.3 436.7 411.2 434.8C457 433 503 405 548.8 402C594.7 399 640.3 421 686 433.8C731.7 446.7 777.3 450.3 823 447C868.7 443.7 914.3 433.3 937.2 428.2L960 423L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="miter"
                />
            </svg>
        </>
    )
}
