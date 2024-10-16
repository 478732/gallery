'use client'

import { RoundedButtonWithIcon } from '@/components/Buttons/RoundedButtonWithIcon'
import { RoundedOutlineButtonWithIcon } from '@/components/Buttons/RoundedOutlineButtonWithIcon'
import { debounce } from '@/functions/debounce'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

interface Props {
    className?: string
}

interface BarTheme {
    backgroundColor: string
    backgroundColorTransparent: string
    borderColor: string
    secondaryButtonColor: string
}

const whiteBarTheme: BarTheme = {
    backgroundColor: 'bg-white/95',
    backgroundColorTransparent: 'bg-white/60',
    borderColor: 'border-gray-900/10',
    secondaryButtonColor: 'button-outline-gray-dark-transparent',
}

const primaryDarkBarTheme: BarTheme = {
    backgroundColor: 'bg-primary-950/90',
    backgroundColorTransparent: 'bg-primary-950/75',
    borderColor: 'border-primary-900/40',
    secondaryButtonColor: 'button-outline-primary-light',
}

export function BottomCTABar(props: Props) {
    const barRef = useRef<HTMLDivElement>(null)
    const [pageHeight, setPageHeight] = useState(0)
    const [isBarVisible, setIsBarVisible] = useState(false)
    const [currentBarTheme, setCurrentBarTheme] = useState({} as BarTheme)

    function handleWindowResize() {
        if (window.innerHeight !== pageHeight) {
            setPageHeight(window.innerHeight)
        }
    }

    useEffect(() => {
        if (!barRef.current) return

        const observer = new IntersectionObserver(([entry]) => {
            setIsBarVisible(entry.isIntersecting)
        })

        observer.observe(barRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        if (!isBarVisible || !barRef.current) return
        const sections = document.querySelectorAll('[data-type="section"]')

        if (sections.length <= 0) return

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement
                    sectionIsIntersecting(target, setCurrentBarTheme)
                }
            })
        }

        const topMargin = window.innerHeight - barRef.current.offsetHeight - 1
        const bottomMargin = barRef.current.offsetHeight - 1

        const observer = new IntersectionObserver(callback, {
            rootMargin: `-${topMargin}px 0px -${bottomMargin}px 0px`,
            threshold: 0,
        })

        sections.forEach((section) => {
            observer.observe(section)
        })

        return () => {
            observer.disconnect()
        }
    }, [isBarVisible, pageHeight])

    useEffect(() => {
        const debounceDelay = 500

        window.addEventListener(
            'resize',
            debounce(handleWindowResize, debounceDelay)
        )

        return () => {
            window.removeEventListener(
                'resize',
                debounce(handleWindowResize, debounceDelay)
            )
        }
    }, [])

    const className = clsx(props.className, 'fixed inset-x-0 bottom-0 z-50')

    const barClassName = clsx(
        `supports-[backdrop-filter]:${currentBarTheme.backgroundColorTransparent}`,
        currentBarTheme.backgroundColor,
        currentBarTheme.borderColor ?? 'border-transparent',
        'flex items-center gap-x-3.5 border-t px-6 py-2.5 [backdrop-filter:saturate(180%)_blur(20px)] transition-colors duration-500 sm:px-3.5'
    )

    return (
        <>
            <div ref={barRef} className={className}>
                <div className={barClassName}>
                    <RoundedOutlineButtonWithIcon
                        className="w-full justify-center"
                        color={currentBarTheme.secondaryButtonColor}
                        href="/contact">
                        Get started
                    </RoundedOutlineButtonWithIcon>
                    <RoundedButtonWithIcon
                        className="w-full justify-center"
                        href="/blog">
                        Get started
                    </RoundedButtonWithIcon>
                </div>
            </div>
        </>
    )
}

function sectionIsIntersecting(
    section: HTMLElement,
    setCurrentBarTheme: React.Dispatch<React.SetStateAction<BarTheme>>
) {
    let newBarTheme = {} as BarTheme

    switch (section.dataset.headerTheme) {
        case 'header-white':
            newBarTheme = whiteBarTheme
            break
        case 'header-primary-dark':
            newBarTheme = primaryDarkBarTheme
            break
        default:
            return
    }

    setCurrentBarTheme((prevState: BarTheme) => {
        if (prevState.backgroundColor === newBarTheme.backgroundColor) {
            return prevState
        } else {
            return newBarTheme
        }
    })
}

// So these classes aren't purged...
// supports-[backdrop-filter]:bg-white/60
// supports-[backdrop-filter]:bg-primary-900/75
