import { GalleryItem } from '@/lib/gallery/utils/types'
import Image from 'next/image'

interface Props {
    className?: string
    images: GalleryItem[]
    imageSizes: string
}

export function GalleryAppDir(props: Props) {
    return (
        <div className={props.className}>
            {props.images.map((image: GalleryItem) => (
                <div
                    key={image.id}
                    className="after:content group aspect-h-2 aspect-w-3 relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                    <Image
                        alt={image.alt}
                        className="rounded-2xl object-cover"
                        style={{ transform: 'translate3d(0, 0, 0)' }}
                        placeholder="blur"
                        src={image.image}
                        width={720}
                        height={480}
                        sizes={props.imageSizes}
                    />
                </div>
            ))}
        </div>
    )
}
