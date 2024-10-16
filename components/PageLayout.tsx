import { BottomCTABar } from '@/components/BottomCTABar'
import { BottomCTABarOffset } from '@/components/BottomCTABarOffset'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
// import { SectionPanelOverlap } from '@/components/Sections/SectionPanelOverlap'
import { SectionFooterCTA } from '@/components/Sections/SectionFooterCTA'

interface Props {
    children: React.ReactNode
    hideCallToActionSection?: boolean
    sectionCallToActionBackgroundColor?: string
    sectionCallToActionCardDividerWrapperClassName?: string
}

export function PageLayout({
    children,
    hideCallToActionSection = false,
    sectionCallToActionBackgroundColor,
    sectionCallToActionCardDividerWrapperClassName,
}: Props) {
    return (
        <>
            <Header />
            <main className="relative bg-gray-50">
                <div
                    data-type="top-of-page"
                    className="absolute top-0 h-[60px] w-full"></div>
                {children}
                {hideCallToActionSection ? null : (
                    <SectionFooterCTA
                        sectionBackgroundColor={
                            sectionCallToActionBackgroundColor
                        }
                        cardDividerWrapperClassName={
                            sectionCallToActionCardDividerWrapperClassName
                        }
                    />
                    // <SectionPanelOverlap
                    //     sectionBackgroundColor={
                    //         sectionCallToActionBackgroundColor
                    //     }
                    // />
                )}

                <Footer />
                <BottomCTABarOffset className="lg:hidden" />
                <BottomCTABar className="lg:hidden" />
            </main>
        </>
    )
}
