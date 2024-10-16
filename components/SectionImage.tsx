import { MyImage } from '@/components/MyImage'
import clsx from 'clsx'
import { StaticImageData } from 'next/image'

interface Props {
    className?: string
    styles?: string
    src: StaticImageData
    alt: string
    sizes: string
    priority?: boolean
}

export function SectionImage({
    className,
    styles = 'rounded-xl shadow-xl',
    src,
    alt,
    sizes,
    priority,
}: Props) {
    const joinedClassName = clsx(className, styles)

    return (
        <MyImage
            className={joinedClassName}
            src={src}
            alt={alt}
            sizes={sizes}
            priority={priority}
        />
    )
}
