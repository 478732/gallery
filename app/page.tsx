'use client'
import { Dialog, DialogPanel } from '@headlessui/react'
import NextImage from 'next/image'
import { useEffect, useState } from 'react'
import img1 from './public/images/img1.webp'
import img10 from './public/images/img10.webp'
import img11 from './public/images/img11.webp'
import img12 from './public/images/img12.webp'
import img2 from './public/images/img2.webp'
import img3 from './public/images/img3.webp'
import img4 from './public/images/img4.webp'
import img5 from './public/images/img5.webp'
import img6 from './public/images/img6.webp'
import img7 from './public/images/img7.webp'
import img8 from './public/images/img8.webp'
import img9 from './public/images/img9.webp'

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
]

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1) // -1 signifies that no image is selected

    useEffect(() => {
        const preloadImages = () => {
            images.forEach((image) => {
                const img = new Image()
                img.src = image.src
            })
        }
        preloadImages()
    }, [])

    const openModal = (imageIndex: number) => {
        setSelectedImageIndex(imageIndex)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedImageIndex(-1)
    }

    const nextImage = () => {
        setSelectedImageIndex((prevImageIndex) => {
            if (prevImageIndex < images.length - 1) {
                return prevImageIndex + 1 // Go to next image
            }

            return prevImageIndex // Stay on current image
        })
    }

    const previousImage = () => {
        setSelectedImageIndex((prevImageIndex) => {
            if (prevImageIndex > 0) {
                return prevImageIndex - 1 // Go to the previous image
            }

            return prevImageIndex // Stay on current image
        })
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {images.map((img, index) => (
                <div
                    key={index}
                    onClick={() => openModal(index)}
                    className="cursor-pointer">
                    <NextImage src={img} alt="" />
                </div>
            ))}

            {/* modal */}
            <Dialog
                open={isModalOpen}
                onClose={closeModal}
                className="fixed inset-0">
                <div className="fixed inset-0 bg-black opacity-90" />
                <DialogPanel className="p-4">
                    {selectedImageIndex !== -1 && (
                        <div className="relative">
                            {/* image */}
                            <NextImage
                                src={images[selectedImageIndex]}
                                priority
                                alt=""
                                className="h-full w-full"
                            />
                            {/* buttons */}
                            <div className="absolute inset-0 space-x-4">
                                <button
                                    onClick={previousImage}
                                    className="p-4 text-white bg-orange-600">
                                    Previous
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="p-4 text-white bg-green-600">
                                    Next
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="p-4 text-white bg-red-600">
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </DialogPanel>
            </Dialog>
        </div>
    )
}
