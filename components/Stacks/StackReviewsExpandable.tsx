'use client'

import { ItemTestimonialCardWithStars } from '@/components/Items/ItemTestimonialCardWithStars'
import { testimonials } from '@/data/testimonials'
import { useEffect, useRef, useState } from 'react'

const ReviewCard = ({ item }: { item: any }) => (
    <ItemTestimonialCardWithStars
        id={item.id}
        title={item.title}
        body={item.body}
        authorName={item.authorName}
        authorSubtitle={item.authorSubtitle}
        authorImageSrc={item.authorImageSrc}
        authorImageAlt={item.authorImageAlt}
        platformLogoMobile={item.platformLogoMobile}
        platformLogoDesktop={item.platformLogoDesktop}
        reviewHref={item.reviewHref}
    />
)

const Button = ({
    className,
    onClick,
    children,
}: {
    className?: string
    onClick: any
    children: React.ReactNode
}) => (
    <button
        type="button"
        className={`${className} rounded-button-with-icon button-primary px-6 py-2.5 text-sm font-semibold [background-image:--buttonGradient] hover:[background-image:--buttonHoverGradient] transition-transform`}
        onClick={onClick}>
        {children}
    </button>
)

function chunkArray(arr:any, parts:any) {
    const chunks:any = Array.from({ length: parts }, () => []);
    // const totalChars = arr.reduce((sum:any, item:any) => sum + item.body.length, 0);
    // const targetChars = totalChars / parts;

    // Sort items by length (descending) to better balance chunks
    const sortedArr = arr.sort((a:any, b:any) => b.body.length - a.body.length);

    for (const item of sortedArr) {
        let smallestChunkIndex = 0;
        let smallestChunkSize = chunks[0].reduce((sum:any, i:any) => sum + i.body.length, 0);

        // Find the chunk with the smallest total character count
        for (let i = 1; i < chunks.length; i++) {
            const chunkSize = chunks[i].reduce((sum:any, i:any) => sum + i.body.length, 0);
            if (chunkSize < smallestChunkSize) {
                smallestChunkSize = chunkSize;
                smallestChunkIndex = i;
            }
        }

        // Add the item to the smallest chunk
        chunks[smallestChunkIndex].push(item);
    }

    return chunks;
}

const allChunks = chunkArray(testimonials, 3)

interface Props {
    className?: string
}

export function StackReviewsExpandable({ className }: Props) {
    const reviewsContainerRef = useRef<HTMLDivElement>(null)
    const showLessContainerRef = useRef<HTMLDivElement>(null)
    const bottomOfReviewsRef = useRef<HTMLDivElement>(null)

    const [isExpanded, setIsExpanded] = useState(false)
    const [showMoreButton, setShowMoreButton] = useState(true)
    const [showLessButton, setShowLessButton] = useState(false)

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev)
        setShowMoreButton((prev) => !prev)
        if (reviewsContainerRef.current) {
            reviewsContainerRef.current.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }

    useEffect(() => {
        if (!bottomOfReviewsRef.current) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setShowLessButton(true)
            } else {
                setShowLessButton(false)
            }
        })

        observer.observe(bottomOfReviewsRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div ref={reviewsContainerRef} className={className}>
            <div
                className={`relative -mt-8 flex flex-col sm:flex-row ${isExpanded ? 'max-h-none' : 'max-h-[55rem] overflow-hidden lg:max-h-[33rem]'}`}>
                <div className="flex-1 sm:-ml-4">
                    {allChunks[0].map((item: any) => (
                        <ReviewCard key={item.id} item={item} />
                    ))}
                </div>
                <div className="flex-1 sm:-mr-4 lg:mr-0">
                    {allChunks[1].map((item: any) => (
                        <ReviewCard key={item.id} item={item} />
                    ))}
                </div>
                <div className="flex-1 sm:hidden lg:-mr-4 lg:block">
                    {allChunks[2].map((item: any) => (
                        <ReviewCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
            {showMoreButton && (
                <>
                    <div className="absolute bottom-0 left-0 h-72 w-full bg-gradient-to-t from-gray-50 via-gray-50"></div>

                    <div className="absolute bottom-48 left-0 flex w-full justify-center">
                        <Button onClick={toggleExpand}>Show more…</Button>
                    </div>
                </>
            )}
            <div
                ref={showLessContainerRef}
                className={`${!showMoreButton && showLessButton ? 'opacity-100' : 'pointer-events-none opacity-0'} sticky inset-x-0 bottom-12 mt-[-12.5rem] flex justify-center bg-gradient-to-t from-gray-50 pb-8 pt-32 transition-opacity duration-300 lg:bottom-0`}>
                <Button className={`${!showMoreButton && showLessButton ? 'translate-y-0' : 'translate-y-4'}`} onClick={toggleExpand}>Okay, I get the point</Button>
            </div>
            <div
                ref={bottomOfReviewsRef}
                className="absolute bottom-0 h-[30%] w-full pointer-events-none -z-10">
            </div>
        </div>
    )
}
