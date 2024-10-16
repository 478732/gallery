import { StaticImageData } from 'next/image'

interface Props {
    reference?: any
    className?: string
    src: string
    extension: string
    autoPlay?: boolean
    controls?: boolean
    muted?: boolean
    loop?: boolean
    preload?: string
    poster: StaticImageData
}

export function Video({
    reference,
    className,
    src,
    extension,
    autoPlay = false,
    muted = true,
    controls = false,
    loop = false,
    preload = 'none',
    poster,
}: Props) {
    return (
        <video
            ref={reference}
            className={className}
            autoPlay={autoPlay}
            playsInline
            muted={muted}
            controls={controls}
            loop={loop}
            preload={preload}
            poster={poster.src}>
            <source src={src} type={`video/${extension}`} />
            Your browser does not support the video tag.
        </video>
    )
}
