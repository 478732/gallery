interface Props {
    className?: string
    pathOneClassName?: string
    pathTwoClassName?: string
    pathThreeClassName?: string
    pathFourClassName?: string
}

export function DividerMustacheLeftLayered({
    className,
    pathOneClassName = 'text-gray-50',
    pathTwoClassName = 'text-primary-900',
    pathThreeClassName = 'text-primary-900',
    pathFourClassName = 'text-primary-900',
}: Props) {
    return (
        <>
            <svg
                className={className}
                viewBox="0 316 960 133"
                // width="960"
                // height="540"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                aria-hidden="true">
                <path
                    className={`-translate-y-6 ${pathFourClassName}`}
                    d="M0 341L22.8 361.5C45.7 382 91.3 423 137 431.3C182.7 439.7 228.3 415.3 274 410.7C319.7 406 365.3 421 411.2 418.5C457 416 503 396 548.8 397.8C594.7 399.7 640.3 423.3 686 433.7C731.7 444 777.3 441 823 429C868.7 417 914.3 396 937.2 385.5L960 375L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
                    fill="currentColor"
                    fillOpacity={0.3}
                    stroke-linecap="round"
                    stroke-linejoin="miter"
                />
                <path
                    className={`-translate-y-2 ${pathThreeClassName}`}
                    d="M0 341L22.8 361.5C45.7 382 91.3 423 137 431.3C182.7 439.7 228.3 415.3 274 410.7C319.7 406 365.3 421 411.2 418.5C457 416 503 396 548.8 397.8C594.7 399.7 640.3 423.3 686 433.7C731.7 444 777.3 441 823 429C868.7 417 914.3 396 937.2 385.5L960 375L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
                    fill="currentColor"
                    fillOpacity={0.5}
                    stroke-linecap="round"
                    stroke-linejoin="miter"
                />
                <path
                    className={`translate-y-2 ${pathTwoClassName}`}
                    d="M0 341L22.8 361.5C45.7 382 91.3 423 137 431.3C182.7 439.7 228.3 415.3 274 410.7C319.7 406 365.3 421 411.2 418.5C457 416 503 396 548.8 397.8C594.7 399.7 640.3 423.3 686 433.7C731.7 444 777.3 441 823 429C868.7 417 914.3 396 937.2 385.5L960 375L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
                    fill="currentColor"
                    fillOpacity={0.7}
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
