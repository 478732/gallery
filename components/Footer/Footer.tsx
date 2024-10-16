import { FooterCallsToAction } from '@/components/Footer/FooterCallsToAction'
import { FooterNavigation } from '@/components/Footer/FooterNavigation'
import { MyImage } from '@/components/MyImage'
import { SectionContainer } from '@/components/SectionContainer'
import { app } from '@/data/app'
import image81 from '@/public/images/logo-white.svg'

export function Footer() {
    return (
        <footer
            data-type="section"
            data-header-theme="header-primary-dark"
            className="relative bg-primary-950 pb-8 pt-20 sm:pt-24 lg:pt-32"
            aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <SectionContainer>
                <FooterCallsToAction className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none" />
                <FooterNavigation className="mt-16" />
                <div className="mt-16 flex items-center justify-between border-t border-primary-900/25 pt-8 sm:mt-20 lg:mt-24">
                    <MyImage
                        className="h-7 w-auto"
                        src={image81}
                        alt="Company name"
                        sizes="66px"
                        backgroundColor=""
                        placeholder="empty"
                    />
                    <p className="text-xs leading-5 text-primary-400">
                        &copy; {new Date().getFullYear()} {app.companyLegalName}
                        . All rights reserved.
                    </p>
                </div>
            </SectionContainer>
        </footer>
    )
}
