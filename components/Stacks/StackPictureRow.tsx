import { MyImage } from '@/components/MyImage'
import { StaticImageData } from 'next/image'

interface Props {
    className?: string
    items: InterfaceItemPicture[]
}

export interface InterfaceItemPicture {
    id: number
    imageSrc: StaticImageData
    imageAlt: string
    imagePriority?: boolean
}

    const rotations = [
        'rotate-2',
        '-rotate-2',
        'rotate-2',
        'rotate-2',
        '-rotate-2',
    ]

export function StackPictureRow({ className, items }: Props) {
    return (
        <div className={className}>
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {items.map((item: InterfaceItemPicture, index: number) => (
                    <div
                        key={item.id}
                        className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl ${rotations[index % rotations.length]}`}>
                        <MyImage
                            className="absolute inset-0 h-full w-full object-cover"
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            sizes="(min-width: 640px) 18rem, 11rem"
                            priority={item.imagePriority}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
