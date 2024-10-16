'use client'

interface Props {
    className: string
    htmlFor: string
    children: React.ReactNode
}

export function FormLabel({ className, htmlFor, children }: Props) {
    return (
        <>
            <label className={className} htmlFor={htmlFor}>
                {children}
            </label>
        </>
    )
}
