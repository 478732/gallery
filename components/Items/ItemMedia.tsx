import { TextButton } from '@/components/Buttons/TextButton'
import { MyImage } from '@/components/MyImage'
import { StaticImageData } from 'next/image'

export interface InterfaceItemMedia {
    id: number
    title: string | React.ReactNode
    subtitle?: string | React.ReactNode
    body: string | React.ReactNode
    buttonText?: string
    buttonHref?: string
    imageSrc: StaticImageData
    imageAlt: string
    imageSizes: string
    imagePriority?: boolean
}

export function ItemMedia({
    title,
    subtitle,
    body,
    buttonText,
    buttonHref,
    imageSrc,
    imageAlt,
    imageSizes,
    imagePriority,
}: InterfaceItemMedia) {
    return (
        <div className="max-w-md lg:max-w-none">
            <div className="relative mb-6 w-full">
                <MyImage
                    src={imageSrc}
                    alt={imageAlt}
                    className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    sizes={imageSizes}
                    priority={imagePriority}
                />
            </div>
            {subtitle && (
                <h4 className="mb-2 mt-8 text-xs text-[--itemSubtitleColor]">
                    {subtitle}
                </h4>
            )}
            <h3 className="text-base font-semibold leading-7 text-[--itemTitleColor]">
                {title}
            </h3>
            <div className="mt-1 text-base leading-7 text-[--itemBodyColor]">
                {body}
            </div>
            {buttonText && buttonHref && (
                <TextButton className="mt-6" href={buttonHref}>
                    {buttonText}
                </TextButton>
            )}
        </div>
    )
}
