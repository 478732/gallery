import { IconStar } from '@/components/Icons/TailwindPrimer/IconStar'
import { MyImage } from '@/components/MyImage'
import { hasDuplicateId } from '@/functions/hasDuplicateId'
import image827 from '@/public/images/starter/headshot-tom.jpg'
import { StaticImageData } from 'next/image'

interface Props {
    className?: string
    imagePriority?: boolean
    title?: React.ReactNode | string
}

interface InterfaceItemAvatar {
    id: number
    imageSrc: StaticImageData
    imageAlt: string
}

const items: InterfaceItemAvatar[] = [
    {
        id: 1,
        imageSrc: image827,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 2,
        imageSrc: image827,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 3,
        imageSrc: image827,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 4,
        imageSrc: image827,
        imageAlt: 'Headshot image of happy client',
    },
]

hasDuplicateId(items)

export function StackReviewsSpotlight({
    className,
    imagePriority,
    title = 'Neighbors in City who chose us',
}: Props) {
    return (
        <div
            className={`${className} flex flex-wrap items-center gap-x-5 gap-y-4`}>
            <div className="flex -space-x-5">
                {items.map((item: InterfaceItemAvatar) => (
                    <MyImage
                        key={item.id}
                        className="inline-block h-12 w-12 rounded-full ring-1 ring-[--stackReviewsSpotlightAvatarRingColor]"
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        sizes="96px"
                        priority={imagePriority}
                    />
                ))}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[--stackReviewsSpotlightBoxBorderColor] bg-[--stackReviewsSpotlightBoxBackgroundColor] text-xs text-[--stackReviewsSpotlightBoxTextColor] ring-1 ring-[--stackReviewsSpotlightBoxRingColor]">
                    100
                    <span className="text-[--stackReviewsSpotlightBoxTextBoldColor]">
                        +
                    </span>
                </div>
            </div>
            <div>
                <h4 className="text-sm font-medium text-[--stackReviewsSpotlightTitleColor]">
                    {title}
                </h4>
                <p className="mt-1 flex items-center text-xs text-[--stackReviewsSpotlightBodyColor]">
                    <span className="mr-[0.3rem]">Excellent</span>
                    <span className="font-semibold text-[--stackReviewsSpotlightBodyBoldColor]">
                        5.0
                    </span>
                    <IconStar className="ml-0.5 mr-1 h-4 w-4 text-[--stackReviewsSpotlightBodyBoldColor]" />
                    21+ trusted reviews
                </p>
            </div>
        </div>
    )
}
