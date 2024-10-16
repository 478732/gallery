import Script from 'next/script'

interface Props {
    className?: string
    dataUrl: string
}

export function FormCalendly({ className, dataUrl}: Props) {
    return (
        <>
            <div
                className={`${className} calendly-inline-widget h-[700px] w-full min-w-[320px]`}
                data-url={`${dataUrl}?hide_event_type_details=1&hide_gdpr_banner=1&text_color=111827&primary_color=4f46e5`}></div>

            <Script src="https://assets.calendly.com/assets/external/widget.js" async/>
        </>
    )
}
