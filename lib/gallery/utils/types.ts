/* eslint-disable no-unused-vars */

import { StaticImageData } from 'next/image'

export interface GalleryItem {
    id: number
    image: StaticImageData
    alt: string
}

export interface SharedModalProps {
    index: number
    images?: GalleryItem[]
    currentPhoto?: GalleryItem
    changePhotoId: (newVal: number) => void
    closeModal: () => void
    navigation: boolean
    direction?: number
}
