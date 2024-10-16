import clsx from 'clsx'

interface Props {
    className?: string
    children: React.ReactNode
}

export function FormError({ className, children }: Props) {
    const joinedClassName = clsx(
        'flex items-baseline text-sm text-[--errorTextColor]',
        className
    )

    return (
        <span className={joinedClassName}>
            <div className="mr-2.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[--errorIconBoxColor]">
                <svg
                    className="h-3 w-3 text-[--errorIconColor]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 512"
                    aria-hidden="true">
                    {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path
                        fill="currentColor"
                        d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                    />
                </svg>
            </div>
            {children}
        </span>
    )
}
