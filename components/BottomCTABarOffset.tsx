interface Props {
    className?: string
}

export function BottomCTABarOffset(props: Props) {
    return (
        <>
            <div className={`pb-[3.8125rem] ${props.className}`}></div>
            <div
                className={`h-[3.8125rem] ${props.className} absolute bottom-0 w-full bg-primary-600`}></div>
        </>
    )
}
