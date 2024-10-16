import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { StaticImageData } from 'next/image'

export interface InterfaceItemMediaCompact {
    id: number
    title: string | React.ReactNode
    body: string | React.ReactNode
    href: string
    imageSrc: StaticImageData
    imageAlt: string
    imageSizes: string
    imagePriority?: boolean
}

export function ItemMediaCompact(props: InterfaceItemMediaCompact) {
    return (
        <MyLink
            href={props.href}
            className="group relative max-w-md lg:max-w-none">
            <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
                <MyImage
                    src={props.imageSrc}
                    alt={props.imageAlt}
                    className="object-cover object-center brightness-90 transition group-hover:brightness-110"
                    sizes={props.imageSizes}
                    priority={props.imagePriority}
                />
            </div>
            <p className="mt-6 text-sm leading-6">
                <strong className="font-semibold text-[--itemTitleColor]">
                    {props.title}
                </strong>{' '}
                <span className="text-[--itemBodyColor]">{props.body}</span>
            </p>
        </MyLink>
    )
}
