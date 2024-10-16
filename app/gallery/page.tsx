'use client'
// image gallery preload images
import { HeaderOffset } from '@/components/Header/HeaderOffset'
import { MyImage } from '@/components/MyImage'
import { PageLayout } from '@/components/PageLayout'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { hasDuplicateId } from '@/functions/hasDuplicateId'
import { range } from '@/lib/gallery/utils/range'
import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import img1 from '../public/images/img1.webp'
import img2 from '../public/images/img2.webp'
import img3 from '../public/images/img3.webp'
import img4 from '../public/images/img4.webp'
import img5 from '../public/images/img5.webp'
import img6 from '../public/images/img6.webp'
import img7 from '../public/images/img7.webp'
import img8 from '../public/images/img8.webp'
import img9 from '../public/images/img9.webp'
// @ts-expect-error error
import useKeypress from 'react-use-keypress'

export interface InterfaceItem {
    id: number
    imageSrc: StaticImageData
    imageAlt: string
    imagePriority?: boolean
}

const images: InterfaceItem[] = [
    {
        id: 0,
        imageSrc: img1,
        imageAlt: '',
    },
    {
        id: 1,
        imageSrc: img2,
        imageAlt: '',
    },
    {
        id: 2,
        imageSrc: img3,
        imageAlt: '',
    },
    {
        id: 3,
        imageSrc: img4,
        imageAlt: '',
    },
    {
        id: 4,
        imageSrc: img5,
        imageAlt: '',
    },
    {
        id: 5,
        imageSrc: img6,
        imageAlt: '',
    },
    {
        id: 6,
        imageSrc: img7,
        imageAlt: '',
    },
    {
        id: 7,
        imageSrc: img8,
        imageAlt: '',
    },
    {
        id: 8,
        imageSrc: img9,
        imageAlt: '',
    },
]
hasDuplicateId(images)

interface ModalProps {
    images: any[]
    currentIndex: number
    isOpen: boolean
    onClose: () => void
    changePhotoIndex: any
}

const Modal = ({
    images,
    currentIndex,
    isOpen,
    onClose,
    changePhotoIndex,
}: ModalProps) => {
    const [loaded, setLoaded] = useState(false)

    const filteredImages = images?.filter((img: any) =>
        range(currentIndex - 15, currentIndex + 15).includes(img.id)
    )

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (currentIndex < images?.length - 1) {
                changePhotoIndex(currentIndex + 1)
            }
        },
        onSwipedRight: () => {
            if (currentIndex > 0) {
                changePhotoIndex(currentIndex - 1)
            }
        },
        trackMouse: true,
    })

    const currentImage = images[currentIndex]

    return (
        <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            // as={Fragment}
        >
            <Dialog
                open={isOpen}
                onClose={onClose}
                className="fixed inset-0 z-[1000001] min-h-screen">
                <div
                    className="fixed inset-0 bg-black/70 [backdrop-filter:saturate(180%)_blur(20px)]"
                    aria-hidden="true"
                />

                <div
                    className="fixed inset-0 flex w-screen items-center justify-center"
                    {...handlers}>
                    <DialogPanel className="relative h-full w-full">
                        <div className="flex h-full w-full items-center justify-center">
                            <MyImage
                                src={currentImage.imageSrc}
                                className="h-auto max-h-screen w-full max-w-full object-contain"
                                sizes="
                                (min-width: 1024px) 1920px,
                                100vw"
                                alt={currentImage.imageAlt}
                                priority={true}
                                onLoad={() => setLoaded(true)}
                            />
                        </div>
                        {/* Buttons + bottom nav bar */}
                        <div className="absolute inset-0 mx-auto flex max-w-container items-center justify-center">
                            {/* Buttons */}
                            {loaded && (
                                <>
                                    <div className="relative aspect-[3/2] max-h-full w-full">
                                        {currentIndex > 0 && (
                                            <button
                                                className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition-colors hover:bg-black/75 hover:text-white focus:outline-none"
                                                style={{
                                                    transform:
                                                        'translate3d(0, 0, 0)',
                                                }}
                                                onClick={() =>
                                                    changePhotoIndex(
                                                        currentIndex - 1
                                                    )
                                                }>
                                                <ChevronLeftIcon className="h-6 w-6" />
                                            </button>
                                        )}
                                        {currentIndex + 1 < images.length && (
                                            <button
                                                className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition-colors hover:bg-black/75 hover:text-white focus:outline-none"
                                                style={{
                                                    transform:
                                                        'translate3d(0, 0, 0)',
                                                }}
                                                onClick={() =>
                                                    changePhotoIndex(
                                                        currentIndex + 1
                                                    )
                                                }>
                                                <ChevronRightIcon className="h-6 w-6" />
                                            </button>
                                        )}
                                    </div>
                                    <div className="absolute right-0 top-0 flex items-center gap-2 p-3 text-white">
                                        <button
                                            onClick={() => onClose()}
                                            className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition-colors hover:bg-black/75 hover:text-white">
                                            <XMarkIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* Bottom Nav bar */}
                            <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
                                <motion.div
                                    initial={false}
                                    className="mx-auto mb-6 mt-6 flex aspect-[3/2] h-14">
                                    <AnimatePresence initial={false}>
                                        {filteredImages.map(
                                            ({
                                                id,
                                                imageSrc,
                                                imageAlt,
                                            }: InterfaceItem) => (
                                                <motion.button
                                                    key={id}
                                                    initial={{
                                                        width: '0%',
                                                        x: `${Math.max(
                                                            (currentIndex - 1) *
                                                                -100,
                                                            15 * -100
                                                        )}%`,
                                                    }}
                                                    animate={{
                                                        scale:
                                                            id === currentIndex
                                                                ? 1.25
                                                                : 1,
                                                        width: '100%',
                                                        x: `${Math.max(
                                                            currentIndex * -100,
                                                            15 * -100
                                                        )}%`,
                                                    }}
                                                    exit={{ width: '0%' }}
                                                    onClick={() =>
                                                        changePhotoIndex(id)
                                                    }
                                                    className={`${
                                                        id === currentIndex
                                                            ? 'z-20 rounded-md shadow shadow-black/50'
                                                            : 'z-10'
                                                    } ${
                                                        id === 0
                                                            ? 'rounded-l-md'
                                                            : ''
                                                    } ${
                                                        id === images.length - 1
                                                            ? 'rounded-r-md'
                                                            : ''
                                                    } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}>
                                                    <Image
                                                        alt={imageAlt}
                                                        width={180}
                                                        height={120}
                                                        className={`${
                                                            id === currentIndex
                                                                ? 'brightness-110 hover:brightness-110'
                                                                : 'brightness-50 contrast-125 hover:brightness-75'
                                                        } h-full object-cover transition-[filter]`}
                                                        src={imageSrc}
                                                        sizes="210px"
                                                    />
                                                </motion.button>
                                            )
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </Transition>
    )
}

export default function Page() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const openModal = (index: number) => {
        setSelectedIndex(index)
        setIsOpen(true)
    }

    const next = () => {
        if (selectedIndex < images.length - 1) {
            setSelectedIndex(selectedIndex + 1)
        }
    }

    const previous = () => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1)
        }
    }

    useKeypress('ArrowRight', () => {
        next()
    })

    useKeypress('ArrowLeft', () => {
        previous()
    })

    return (
        <PageLayout>
            <div>
                <Section className="pt-section pb-section">
                    <HeaderOffset />
                    <SectionContainer>
                        <div className="w-full gap-x-4 space-y-4 sm:columns-2 lg:columns-3">
                            {images.map((item) => (
                                <MyImage
                                    key={item.id}
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    sizes="
                                        (min-width: 1024px) 33vw,
                                        (min-width: 640px) 50vw,
                                        100vw
                                    "
                                    className="cursor-zoom-in rounded-2xl brightness-90 transition will-change-auto hover:brightness-110"
                                    onClick={() => openModal(item.id)} // Open modal with the clicked image ID
                                />
                            ))}
                        </div>
                    </SectionContainer>
                </Section>

                <Modal
                    images={images} // Pass images array
                    currentIndex={selectedIndex} // Pass the selected index
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    changePhotoIndex={setSelectedIndex}
                />
            </div>
        </PageLayout>
    )
}
