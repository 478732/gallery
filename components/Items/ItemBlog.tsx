import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { InterfaceBlogPost } from '@/data/blog-posts'

export interface InterfaceItemBlog extends InterfaceBlogPost {
    categoryTitle: string | React.ReactNode
    categoryHref: string
    body: string | React.ReactNode
    authorSubtitle: string | React.ReactNode
    imagePriority?: boolean
}

export function ItemBlog(props: InterfaceItemBlog) {
    return (
        <article className="flex flex-col items-start justify-between">
            <div className="relative w-full">
                <MyImage
                    src={props.imageSrc}
                    alt={props.imageAlt}
                    className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    sizes={props.imageSizes}
                    priority={props.imagePriority}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time
                        dateTime={props.publishedDateTime}
                        className="text-gray-500">
                        {props.publishedDate}
                    </time>
                    <MyLink
                        href={props.categoryHref}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        {props.categoryTitle}
                    </MyLink>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <MyLink href={`/blog/${props.slug}`}>
                            <span className="absolute inset-0" />
                            {props.title}
                        </MyLink>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {props.body}
                    </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <MyImage
                        src={props.authorImageSrc}
                        alt={props.authorImageAlt}
                        className="h-10 w-10 rounded-full"
                        sizes="80px"
                    />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <MyLink href={props.authorHref}>
                                <span className="absolute inset-0" />
                                {props.authorName}
                            </MyLink>
                        </p>
                        <p className="text-gray-600">{props.authorSubtitle}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}
