'use client'

import { ModalWithYouTubeVideo } from '@/components/ModalWithYouTubeVideo'
import { MyImage } from '@/components/MyImage'
import { Video } from '@/components/Video'
import emptyImage from '@/public/images/minified/empty-image.webp'
import { PauseIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { PlayIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface Props {
    className?: string
    iconBoxClassName: string
    playIconClassName: string
    pauseIconClassName: string
    thumbnailSrc: StaticImageData
    thumbnailAlt: string
    thumbnailSizes: string
    thumbnailPriority?: boolean
    previewVideoSrc: string
    previewVideoExtension: string
    videoId: string
}

export function VideoPlayer(props: Props) {
    const joinedClassName = clsx(props.className, 'relative')

    const previewVideoRef = useRef<HTMLVideoElement>(null)
    const isPreviewVideoInView = useInView(previewVideoRef)
    const [isPreviewVideoPaused, setIsPreviewVideoPaused] = useState(false)
    const [didUserPausePreviewVideo, setDidUserPausePreviewVideo] =
        useState(false)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const isVideoPlaying = (video: HTMLVideoElement) =>
        !!(
            video.currentTime > 0 &&
            !video.paused &&
            !video.ended &&
            video.readyState > 2
        )

    const playPreviewVideo = () => {
        if (
            previewVideoRef.current &&
            previewVideoRef.current.src &&
            isVideoPlaying(previewVideoRef.current) === false
        ) {
            previewVideoRef.current.play().catch(() => {})

            setIsPreviewVideoPaused(false)
        }
    }

    const pausePreviewVideo = () => {
        if (previewVideoRef.current && previewVideoRef.current.src) {
            previewVideoRef.current.pause()
            setIsPreviewVideoPaused(true)
        }
    }

    const handleOnPageLoad = () => {
        if (previewVideoRef.current) {
            previewVideoRef.current.src = props.previewVideoSrc
            previewVideoRef.current.preload = 'auto'
            playPreviewVideo()
        }
    }

    const handleUserPlayOrPausePreviewVideoRequest = () => {
        if (previewVideoRef.current && previewVideoRef.current.paused) {
            playPreviewVideo()
            setDidUserPausePreviewVideo(false)
        } else {
            pausePreviewVideo()
            setDidUserPausePreviewVideo(true)
        }
    }

    useEffect(() => {
        if (document.readyState === 'complete') {
            handleOnPageLoad()
        } else {
            window.addEventListener('load', handleOnPageLoad, { once: true })

            return () => {
                window.removeEventListener('load', handleOnPageLoad)
            }
        }
    }, [])

    useEffect(() => {
        if (previewVideoRef.current && previewVideoRef.current.src) {
            if (isModalOpen || !isPreviewVideoInView) {
                pausePreviewVideo()
            }
            if (
                !isModalOpen &&
                isPreviewVideoInView &&
                !didUserPausePreviewVideo
            ) {
                playPreviewVideo()
            }
        }
    }, [isModalOpen, isPreviewVideoInView])

    return (
        <>
            <div className={joinedClassName}>
                <MyImage
                    className="object-cover"
                    src={props.thumbnailSrc}
                    alt={props.thumbnailAlt}
                    sizes={props.thumbnailSizes}
                    priority={props.thumbnailPriority}
                />
                <Video
                    reference={previewVideoRef}
                    className="pointer-events-none"
                    src=""
                    extension={props.previewVideoExtension}
                    autoPlay={false}
                    muted={true}
                    loop={true}
                    preload="none"
                    poster={emptyImage}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        onClick={handleUserPlayOrPausePreviewVideoRequest}
                        className={`${props.iconBoxClassName} flex cursor-pointer items-center justify-center rounded-full`}>
                        {isPreviewVideoPaused ? (
                            <PlayIcon
                                className={`${props.playIconClassName}`}
                            />
                        ) : (
                            <PauseIcon
                                className={`${props.pauseIconClassName}`}
                            />
                        )}
                    </div>
                    <div className="relative" aria-label="Play video">
                        {/* <div className="animate-play-button-ping left-1/2 top-1/2 absolute w-[135%] h-[148%] bg-gray-900/40 group-hover:bg-primary-600/40 rounded-full transition-colors"></div> */}
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="relative flex cursor-pointer items-center rounded-full bg-gray-900/60 px-[1.375rem] py-1.5 font-semibold text-white transition-colors hover:bg-primary-600 hover:[background-image:radial-gradient(69.5%_69.5%_at_50%_100%,#BAA8FF,rgba(138,108,255,0)_87%)]">
                            <PlayCircleIcon
                                fill="currentColor"
                                className="mr-1.5 h-5 w-5"
                            />
                            Play
                        </div>
                    </div>
                </div>
            </div>
            <ModalWithYouTubeVideo
                videoId={props.videoId}
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
            />
        </>
    )
}
