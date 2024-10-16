import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { StaticImageData } from 'next/image'

export interface InterfaceItemMediaCard {
    id: number
    title: string | React.ReactNode
    subtitle?: string | React.ReactNode
    href: string
    imageSrc: StaticImageData
    imageAlt: string
    imageSizes: string
    imagePriority?: boolean
}

export function ItemMediaCard(props: InterfaceItemMediaCard) {
    return (
        <MyLink
            className="group relative block w-full max-w-md overflow-hidden rounded-lg lg:max-w-none"
            href={props.href}>
            <div className="aspect-h-9 aspect-w-16">
                <MyImage
                    src={props.imageSrc}
                    alt={props.imageAlt}
                    className="object-cover brightness-90 transition group-hover:brightness-110"
                    sizes={props.imageSizes}
                    priority={props.imagePriority}
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 flex flex-col justify-end px-4 py-3.5">
                {props.subtitle && (
                    <h2 className="mb-1 text-xs text-primary-200">
                        {props.subtitle}
                    </h2>
                )}
                <h3 className="text-base font-semibold leading-6 text-white">
                    {props.title}
                </h3>
            </div>
        </MyLink>
    )
}
