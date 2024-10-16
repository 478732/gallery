'use client'

import { MyImage } from '@/components/MyImage'
import { PauseIcon } from '@heroicons/react/20/solid'
import { PlayIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'

const WORD_IN_I_FRAME_SRC = 'vimeo'

interface Props {
    className?: string
    iFrameClassName?: string
    iconBoxClassName: string
    playIconClassName: string
    pauseIconClassName: string
    thumbnailSrc: StaticImageData
    thumbnailAlt: string
    thumbnailSizes: string
    thumbnailPriority?: boolean
    iFrameTitle: string
    videoId: string
}

export function VimeoVideo(props: Props) {
    const joinedClassName = clsx(props.className, 'relative')

    const iFrameRef = useRef<HTMLIFrameElement>(null)
    const isIFrameInView = useInView(iFrameRef)

    const [isVideoPaused, setIsVideoPaused] = useState(false)
    const [didUserPauseVideo, setDidUserPauseVideo] = useState(false)

    const loadIFrameVideo = () => {
        if (iFrameRef.current) {
            iFrameRef.current.src = `https://player.${WORD_IN_I_FRAME_SRC}.com/video/${props.videoId}?background=1&keyboard=0&playsinline=1&player_id=0&app_id=58479`
            setIsVideoPaused(false)
        }
    }

    const playVideo = () => {
        if (
            iFrameRef.current &&
            iFrameRef.current.contentWindow &&
            isVideoPaused
        ) {
            iFrameRef.current.contentWindow.postMessage({ method: 'play' }, '*')
            setIsVideoPaused(false)
        }
    }

    const pauseVideo = () => {
        if (
            iFrameRef.current &&
            iFrameRef.current.contentWindow &&
            !isVideoPaused
        ) {
            iFrameRef.current.contentWindow.postMessage(
                { method: 'pause' },
                '*'
            )
            setIsVideoPaused(true)
        }
    }

    const handleUserPlayOrPauseVideoRequest = () => {
        if (isVideoPaused) {
            playVideo()
            setDidUserPauseVideo(false)
        } else {
            pauseVideo()
            setDidUserPauseVideo(true)
        }
    }

    useEffect(() => {
        if (iFrameRef.current && iFrameRef.current.src) {
            if (!isIFrameInView) {
                pauseVideo()
            }
            if (iFrameRef.current && isIFrameInView && !didUserPauseVideo) {
                if (iFrameRef.current.src.indexOf(WORD_IN_I_FRAME_SRC) > -1) {
                    playVideo()
                } else {
                    loadIFrameVideo()
                }
            }
        }
    }, [isIFrameInView])

    return (
        <>
            <div className={joinedClassName}>
                <MyImage
                    className="h-full w-full object-cover"
                    src={props.thumbnailSrc}
                    alt={props.thumbnailAlt}
                    sizes={props.thumbnailSizes}
                    priority={props.thumbnailPriority}
                />
                <iframe
                    ref={iFrameRef}
                    className={`${props.iFrameClassName} pointer-events-none absolute inset-0 h-full w-full`}
                    src=""
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title={props.iFrameTitle}></iframe>
            </div>
            <div
                onClick={handleUserPlayOrPauseVideoRequest}
                className={`${props.iconBoxClassName} flex cursor-pointer items-center justify-center rounded-full`}>
                {isVideoPaused ? (
                    <PlayIcon className={`${props.playIconClassName}`} />
                ) : (
                    <PauseIcon className={`${props.pauseIconClassName}`} />
                )}
            </div>
        </>
    )
}
