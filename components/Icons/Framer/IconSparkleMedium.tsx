interface Props {
    className?: string
}

export function IconSparkleMedium({ className }: Props) {
    return (
        <svg
            className={className}
            // width="500"
            // height="500"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            {/* <mask
                id="mask0_185_89"
                style="mask-type:luminance"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="500"
                height="500">
                <path d="M0 0H500V500H0V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_185_89)"> */}
                <path
                    d="M499.958 249.979C312.474 284.495 284.495 312.474 249.979 499.958C215.464 312.474 187.484 284.495 0 249.979C187.484 215.464 215.464 187.484 249.979 0C284.495 187.484 312.474 215.464 499.958 249.979Z"
                    fill="currentColor"
                />
            {/* </g> */}
        </svg>
    )
}
