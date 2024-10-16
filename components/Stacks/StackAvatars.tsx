import { MyImage } from '@/components/MyImage'
import { hasDuplicateId } from '@/functions/hasDuplicateId'
import { shuffle } from '@/functions/shuffle'
import image4281 from '@/public/images/starter/headshot-tim.jpg'
import { StaticImageData } from 'next/image'

export interface InterfaceItemAvatar {
    id: number
    imageSrc: StaticImageData
    imageAlt: string
    imagePriority?: boolean
}

const items: InterfaceItemAvatar[] = [
    {
        id: 1,
        imageSrc: image4281,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 2,
        imageSrc: image4281,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 3,
        imageSrc: image4281,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 4,
        imageSrc: image4281,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 5,
        imageSrc: image4281,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 6,
        imageSrc: image4281,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 7,
        imageSrc: image4281,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 8,
        imageSrc: image4281,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 9,
        imageSrc: image4281,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 10,
        imageSrc: image4281,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 11,
        imageSrc: image4281,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 12,
        imageSrc: image4281,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 13,
        imageSrc: image4281,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 14,
        imageSrc: image4281,
        imageAlt: 'Headshot image of happy client',
    },
]

hasDuplicateId(items)

interface Props {
    className?: string
    rowClassName?: string
    imageClassName?: string
    numberOfRows?: number
    numberOfItemsInEachRow?: number
}

shuffle(items)

export function StackAvatars({
    className,
    rowClassName,
    imageClassName,
    numberOfRows = 3,
    numberOfItemsInEachRow = 5,
}: Props) {
    return (
        <div className={`${className} -space-y-4`}>
            {[...Array(numberOfRows)].map((_, rowIndex) => (
                <div
                    key={rowIndex}
                    className={`${rowClassName} flex -space-x-4`}>
                    {items
                        .slice(
                            rowIndex * numberOfItemsInEachRow,
                            rowIndex * numberOfItemsInEachRow +
                                numberOfItemsInEachRow
                        )
                        .map((item: InterfaceItemAvatar, index: number) => (
                            <MyImage
                                key={item.id}
                                className={`${imageClassName} z-[${numberOfItemsInEachRow - index}0] inline-block h-[3.85rem] w-[3.85rem] rounded-full object-cover ring-[1.5px] ring-[--sectionBackgroundColor]`}
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                sizes="124px"
                                priority={item.imagePriority}
                            />
                        ))}
                    {rowIndex === numberOfRows - 1 &&
                        items.length > rowIndex * numberOfItemsInEachRow && (
                            <div className="z-10 inline-flex h-[3.85rem] w-[3.85rem] items-center justify-center rounded-full bg-[--sectionBackgroundColor] text-sm text-[--stackAvatarsBoxTextColor]">
                                100
                                <span className="text-[--stackAvatarsBoxTextBoldColor]">
                                    +
                                </span>
                            </div>
                        )}
                </div>
            ))}
        </div>
    )
}
