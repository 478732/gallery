'use client'
// image gallery preload images
import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import NextImage, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import img1 from '../public/images/img1.webp'
import img2 from '../public/images/img2.webp'
import img3 from '../public/images/img3.webp'
import img4 from '../public/images/img4.webp'
import img5 from '../public/images/img5.webp'
import img6 from '../public/images/img6.webp'
import img7 from '../public/images/img7.webp'
import img8 from '../public/images/img8.webp'
import img9 from '../public/images/img9.webp'

const range = (start: number, end: number) => {
    const output = []
    if (typeof end === 'undefined') {
        end = start
        start = 0
    }
    for (let i = start; i < end; i += 1) {
        output.push(i)
    }
    return output
}

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

interface ModalProps {
    images: InterfaceItem[]
    currentIndex: number
    isOpen: boolean
    onClose: () => void
    changePhotoIndex: (index: number) => void; // Define the function type
}

const Modal = ({
    images,
    currentIndex,
    isOpen,
    onClose,
    changePhotoIndex,
}: ModalProps) => {
    const [loaded, setLoaded] = useState(false)

    const filteredImages = images?.filter((img: InterfaceItem) =>
        range(currentIndex - 15, currentIndex + 15).includes(img.id)
    )

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

                <div className="fixed inset-0 flex w-screen items-center justify-center">
                    <DialogPanel className="relative h-full w-full">
                        <div className="flex h-full w-full items-center justify-center">
                            <NextImage
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
                                                Previous
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
                                                Next
                                            </button>
                                        )}
                                    </div>
                                    <div className="absolute right-0 top-0 flex items-center gap-2 p-3 text-white">
                                        <button
                                            onClick={() => onClose()}
                                            className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition-colors hover:bg-black/75 hover:text-white">
                                            exit
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* Bottom Nav bar */}
                            <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
                                <div
                                    className="mx-auto mb-6 mt-6 flex aspect-[3/2] h-14">
                                    <div>
                                        {filteredImages.map(
                                            ({
                                                id,
                                                imageSrc,
                                                imageAlt,
                                            }: InterfaceItem) => (
                                                <div
                                                    key={id}
                                                    onClick={() =>
                                                        changePhotoIndex(id)
                                                    }
                                                    className={`${
                                                        id === currentIndex
                                                            ? 'z-20 rounded-md shadow shadow-black/50'
                                                            : 'z-10'
                                                    } ${id === 0 ? 'rounded-l-md' : ''} ${
                                                        id === images.length - 1
                                                            ? 'rounded-r-md'
                                                            : ''
                                                    } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}>
                                                    <NextImage
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
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
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

    // const next = () => {
    //     if (selectedIndex < images.length - 1) {
    //         setSelectedIndex(selectedIndex + 1)
    //     }
    // }

    // const previous = () => {
    //     if (selectedIndex > 0) {
    //         setSelectedIndex(selectedIndex - 1)
    //     }
    // }

    useEffect(() => {
        const preloadImages = () => {
            images.forEach((image) => {
                const img = new Image()
                img.src = image.imageSrc.src
            })
        }
        preloadImages()
    }, [])

    return (
            <div>
                <section className="pt-section pb-section">
                    <div className="w-full gap-x-4 space-y-4 sm:columns-2 lg:columns-3">
                        {images.map((item) => (
                            <NextImage
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
                </section>

                <Modal
                    images={images} // Pass images array
                    currentIndex={selectedIndex} // Pass the selected index
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    changePhotoIndex={setSelectedIndex}
                />
            </div>
        
    )
}
