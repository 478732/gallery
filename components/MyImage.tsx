import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'

interface Props {
    src: StaticImageData
    alt: string
    sizes: string
    priority?: boolean
    className?: string
    backgroundColor?: string
    placeholder?: 'blur' | 'empty'
    onClick?: any
    onLoad?:any
}

export function MyImage({
    className,
    src,
    alt,
    sizes,
    priority = false,
    backgroundColor = 'bg-white/10',
    placeholder = 'blur',
    onClick,
    onLoad,
}: Props) {
    const joinedClassName = clsx(className, backgroundColor)

    return (
        <Image
            onClick={onClick}
            className={joinedClassName}
            src={src}
            alt={alt}
            sizes={sizes}
            priority={priority}
            placeholder={placeholder}
            onLoad={onLoad}
        />
    )
}
