import { MyImage } from '@/components/MyImage'
import { StaticImageData } from 'next/image'

export interface InterfaceItemTestimonialCard {
    id: number
    body: string | React.ReactNode
    authorName: string | React.ReactNode
    authorSubtitle: string | React.ReactNode
    authorImageSrc: StaticImageData
    authorImageAlt: string
}

export function ItemTestimonialCard(props: InterfaceItemTestimonialCard) {
    return (
        <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
            <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                <blockquote className="text-gray-900">
                    <p>{`“${props.body}”`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                    <MyImage
                        className="h-10 w-10 rounded-full bg-gray-50"
                        src={props.authorImageSrc}
                        alt={props.authorImageAlt}
                        sizes="80px"
                    />
                    <div>
                        <div className="font-semibold text-gray-900">
                            {props.authorName}
                        </div>
                        <div className="text-gray-600">
                            {props.authorSubtitle}
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}
