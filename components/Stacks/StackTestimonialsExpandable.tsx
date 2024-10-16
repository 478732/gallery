'use client'

import { ItemTestimonialCardWithStars } from '@/components/Items/ItemTestimonialCardWithStars'
import { testimonials } from '@/data/testimonials'
import { useEffect, useRef, useState } from 'react'

const TestimonialCard = ({ item }: { item: any }) => (
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
    onClick,
    children,
}: {
    onClick: any
    children: React.ReactNode
}) => (
    <button
        type="button"
        className="rounded-button-with-icon button-primary px-6 py-2.5 text-sm font-semibold [background-image:--buttonGradient] hover:[background-image:--buttonHoverGradient]"
        onClick={onClick}>
        {children}
    </button>
)

const allChunks: any = []
const numberOfChunks = 3
const numberOfItemsInEachChunk = Math.ceil(testimonials.length / numberOfChunks)

for (let i = 0; i < numberOfChunks; i++) {
    const start = i * numberOfItemsInEachChunk
    const end = start + numberOfItemsInEachChunk
    allChunks.push(testimonials.slice(start, end))
}

function isElement50PercentVisibleFromBottom(element: any) {
    if (!element) return false

    const rect = element.getBoundingClientRect()
    const elementHeight = rect.height
    const viewportBottom = window.innerHeight

    // Check if 50% of the element's height is visible
    // Element is considered 50% visible from the bottom if:
    // 1. The top of the element is within the bottom half of the viewport
    // 2. The bottom of the element is above the bottom of the viewport minus 50% of its height

    return (
        rect.top < viewportBottom && // Top of element is within the viewport height
        rect.top + elementHeight * 0.5 < viewportBottom // 50% of the element is above the bottom of the viewport
    )
}

interface Props {
    className?: string
}

export function StackTestimonialsExpandable({ className }: Props) {
    const testimonialsContainerRef = useRef<HTMLDivElement>(null)
    const showLessContainerRef = useRef<HTMLDivElement>(null)

    const [stackItemEndIndex, setStackItemEndIndex] = useState(1)
    const [showMoreButton, setShowMoreButton] = useState(true)
    const [showLessButton, setShowLessButton] = useState(false)

    useEffect(() => {
        if (window.innerWidth >= 640) {
            setStackItemEndIndex(2)
        }
    }, [])

    useEffect(() => {
        const shouldShowLessButton =
            stackItemEndIndex >= testimonials.length / numberOfChunks

        if (shouldShowLessButton !== showLessButton) {
            setShowLessButton(shouldShowLessButton)
        }

        if (!shouldShowLessButton !== showMoreButton) {
            setShowMoreButton(!shouldShowLessButton)
        }
    }, [stackItemEndIndex])

    useEffect(() => {
        const handleScroll = () => {
            if (!testimonialsContainerRef.current) return

            const shouldShowLessButton = isElement50PercentVisibleFromBottom(
                testimonialsContainerRef.current
            )

            setShowLessButton(shouldShowLessButton)
        }

        if (showLessButton) {
            window.addEventListener('scroll', handleScroll)

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [showMoreButton])

    const showMoreItems = () => {
        if (stackItemEndIndex < testimonials.length / numberOfChunks) {
            setStackItemEndIndex((prevState) => prevState + 1)
        }
    }

    const showLessItems = () => {
        if (stackItemEndIndex >= testimonials.length / numberOfChunks) {
            setStackItemEndIndex((prevState) => prevState - 1)
        }
    }

    return (
        <div ref={testimonialsContainerRef} className={className}>
            <div className="relative -mt-8 flex flex-col sm:flex-row">
                <div className="sm:-ml-4">
                    {allChunks[0]
                        .slice(0, stackItemEndIndex)
                        .map((item: any) => (
                            <TestimonialCard key={item.id} item={item} />
                        ))}
                </div>
                <div className="sm:-mr-4 lg:mr-0">
                    {allChunks[1]
                        .slice(0, stackItemEndIndex)
                        .map((item: any) => (
                            <TestimonialCard key={item.id} item={item} />
                        ))}
                </div>
                <div className="sm:hidden lg:-mr-4 lg:block">
                    {allChunks[2]
                        .slice(0, stackItemEndIndex)
                        .map((item: any) => (
                            <TestimonialCard key={item.id} item={item} />
                        ))}
                </div>
            </div>
            {showMoreButton && (
                <>
                    <div className="absolute bottom-0 left-0 h-72 w-full bg-gradient-to-t from-gray-50 via-gray-50"></div>

                    <div className="absolute bottom-48 left-0 flex w-full justify-center">
                        <Button onClick={showMoreItems}>Show more…</Button>
                    </div>
                </>
            )}
            <div
                ref={showLessContainerRef}
                className={`${!showMoreButton && showLessButton ? 'opacity-100' : 'pointer-events-none opacity-0'} sticky inset-x-0 bottom-12 mt-[-12.5rem] flex justify-center bg-gradient-to-t from-gray-50 pb-8 pt-32 transition-opacity duration-300 lg:bottom-0`}>
                <Button onClick={showLessItems}>Okay, I get the point</Button>
            </div>
        </div>
    )
}
