import { GalleryItem } from '@/lib/gallery/utils/types'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    className?: string
    images: GalleryItem[]
    imageSizes: string
    lastViewedPhoto: number | null
    lastViewedPhotoRef: React.RefObject<HTMLAnchorElement>
}

export function Gallery(props: Props) {
    return (
        <div className={props.className}>
            {props.images.map((image: GalleryItem) => (
                <Link
                    key={image.id}
                    href={`/gallery/?photoId=${image.id}`}
                    as={`/p/${image.id}`}
                    ref={
                        image.id === Number(props.lastViewedPhoto)
                            ? props.lastViewedPhotoRef
                            : null
                    }
                    shallow
                    className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                    <Image
                        alt="Next.js Conf photo"
                        className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                        style={{ transform: 'translate3d(0, 0, 0)' }}
                        placeholder="blur"
                        src={image.image}
                        width={720}
                        height={480}
                        sizes={props.imageSizes}
                    />
                </Link>
            ))}
        </div>
    )
}
