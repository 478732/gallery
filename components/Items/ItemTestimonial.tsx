// import { IconCheckSolid } from '@/components/Icons/FontAwesome/IconCheckSolid'
import { IconCheckInRibbon } from '@/components/Icons/NounProject/IconCheckInRibbon'
import { IconStar } from '@/components/Icons/TailwindPrimer/IconStar'
import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { StaticImageData } from 'next/image'

export interface InterfaceItemTestimonial {
    id: number
    reviewHref: string
    title: string | React.ReactNode
    body: string | React.ReactNode
    authorName: string | React.ReactNode
    authorSubtitle: string | React.ReactNode
    authorImageSrc: StaticImageData
    authorImageAlt: string
    platformHref: string
    platformLogo: React.ReactNode
}

export function ItemTestimonial(props: InterfaceItemTestimonial) {
    return (
        <figure className="flex flex-col">
            <p className="sr-only">5 out of 5 stars</p>

            <div className="-mx-1 mb-6 flex space-x-2 text-primary-500">
                {[0, 1, 2, 3, 4].map((index) => (
                    <IconStar
                        key={index}
                        className="h-[1.5625rem] w-[1.5625rem] flex-none"
                    />
                ))}
            </div>

            <h3 className="text-base font-semibold text-white">
                {props.title}
            </h3>

            <blockquote className="mt-2 text-base leading-7 text-primary-300">
                <p>{props.body}</p>
            </blockquote>

            <figcaption className="mt-auto pt-6 flex items-center">
                {/* <div className="relative"> */}
                    <MyImage
                        className="h-10 w-10 rounded-full"
                        src={props.authorImageSrc}
                        alt={props.authorImageAlt}
                        sizes="80px"
                    />
                    {/* <div className="absolute bottom-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-primary-600 bg-primary-900 ring-2 ring-primary-950">
                        <IconCheckSolid className="h-2 w-2 text-white"></IconCheckSolid>
                    </div>
                </div> */}
                <div className="ml-4 flex items-end justify-between w-full">
                <div>
                    <MyLink href={props.reviewHref} className="group relative text-sm font-medium text-white inline-flex items-center">
                        {props.authorName}
                        <div className="relative ml-2">
                            <IconCheckInRibbon className="h-4 w-4 text-primary-200" />
                            <span className="ring-1 ring-inset ring-gray-500/20 absolute right-0 top-0 -translate-y-6 group-hover:-translate-y-[1.7rem] translate-x-1/2 overflow-hidden whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-xs text-white opacity-0 [transition-property:opacity,transform] duration-300 group-hover:opacity-100">
                                Verified customer
                                <div className="absolute -top-px left-1/2 flex h-[2px] w-32 -translate-x-1/2 scale-x-flip">
                                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(79,70,229,0.3)_67.19%,rgba(79,70,229,0)_100%)]"></div>
                                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(79,70,229,0.3)_67.19%,rgba(79,70,229,0)_100%)]"></div>
                                </div>
                            </span>
                        </div>
                    </MyLink>
                    <div className="mt-0.5 text-xs text-primary-400">
                        {props.authorSubtitle}
                    </div>
                </div>
                    <MyLink className="hover:brightness-125" href={props.platformHref}>
                        {props.platformLogo}
                    </MyLink>
                </div>
            </figcaption>
        </figure>
    )
}
