import { MyImage } from '@/components/MyImage'
import { StaticImageData } from 'next/image'

export interface InterfaceItemTeamMember {
    id: number
    title: string | React.ReactNode
    subtitle: string | React.ReactNode
    imageSrc: StaticImageData
    imageAlt: string
}

export function ItemTeamMember({
    imageSrc,
    imageAlt,
    title,
    subtitle,
}: InterfaceItemTeamMember) {
    return (
        <li>
            <MyImage
                className="mx-auto h-24 w-24 rounded-full"
                src={imageSrc}
                alt={imageAlt}
                sizes="192px"
            />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-[--itemTitleColor]">
                {title}
            </h3>
            <p className="text-sm leading-6 text-[--itemSubtitleColor]">
                {subtitle}
            </p>
        </li>
    )
}
