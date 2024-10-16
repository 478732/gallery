import { Ribbon } from '@/components/Graphics/Ribbon'
import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { InterfaceBlogPost } from '@/data/blog-posts'

export interface InterfaceItemBlogMediaCard extends InterfaceBlogPost {
    ribbonTitle: string | React.ReactNode
    imagePriority?: boolean
}

export function ItemBlogMediaCard(props: InterfaceItemBlogMediaCard) {
    return (
        <article className="group relative">
            {props.ribbonTitle && (
                <MyLink href={`/blog/${props.slug}`}>
                    <Ribbon>Featured</Ribbon>
                </MyLink>
            )}
            <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <MyImage
                    className="absolute inset-0 -z-10 h-full w-full object-cover brightness-90 transition group-hover:brightness-110"
                    src={props.imageSrc}
                    alt={props.imageAlt}
                    sizes={props.imageSizes}
                    priority={props.imagePriority}
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <time dateTime={props.publishedDateTime} className="mr-8">
                        {props.publishedDate}
                    </time>
                    <div className="-ml-4 flex items-center gap-x-4">
                        <svg
                            viewBox="0 0 2 2"
                            className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        <div className="flex gap-x-2.5">
                            <MyImage
                                className="h-6 w-6 flex-none rounded-full bg-white/10"
                                src={props.authorImageSrc}
                                alt={props.authorImageAlt}
                                sizes="48px"
                            />
                            {props.authorName}
                        </div>
                    </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <MyLink href={`/blog/${props.slug}`}>
                        <span className="absolute inset-0" />
                        {props.title}
                    </MyLink>
                </h3>
            </div>
        </article>
    )
}
