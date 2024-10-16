import { TextButton } from '@/components/Buttons/TextButton'
import { DividerFooter } from '@/components/Graphics/DividerFooter'
import { Ribbon } from '@/components/Graphics/Ribbon'
import { MyImage } from '@/components/MyImage'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { SectionBody } from '@/components/Typography/SectionBody'
import { SectionTitle } from '@/components/Typography/SectionTitle'
import image813 from '@/public/images/starter/desk.jpeg'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

interface Props {
    className?: string
    cardDividerWrapperClassName?: string
    sectionBackgroundColor?: string
}

const items = [
    'Competitive salaries',
    'Flexible work hours',
    '30 days of paid vacation',
    'Annual team retreats',
    'Benefits for you and your family',
    'A great work environment',
]

export function SectionFooterCTA({
    className,
    sectionBackgroundColor = 'bg-gray-50',
    cardDividerWrapperClassName,
}: Props) {
    const sectionBackgroundColorAsTextColor = sectionBackgroundColor.replace(
        'bg-',
        'text-'
    )

    return (
        <Section className={`${className} bg-primary-950`}>
            {/* mobile divider - sm+ */}
            <div
                className={`absolute top-0 hidden h-[40%] w-full ${cardDividerWrapperClassName} ${sectionBackgroundColor} sm:block lg:hidden`}
                aria-hidden="true">
                <DividerFooter
                    className="absolute bottom-0 max-h-28 w-full"
                    viewBox="0 369 960 89"
                    pathThreeClassName={sectionBackgroundColorAsTextColor}
                />
            </div>
            {/* desktop divider */}
            <div
                className={`absolute top-0 hidden h-1/2 w-full ${sectionBackgroundColor} lg:block`}
                aria-hidden="true"></div>
            <div
                className={`absolute bottom-0 hidden h-1/2 w-full -translate-y-10 ${sectionBackgroundColor} lg:block`}
                aria-hidden="true">
                <DividerFooter
                    className="max-h-28 w-full 2xl:max-h-32"
                    viewBox="0 373 960 89"
                    pathThreeClassName={sectionBackgroundColorAsTextColor}
                />
                <div className="h-full bg-primary-950"></div>
            </div>
            <div className="relative">
                <SectionContainer className="!px-0 sm:!px-6 lg:!px-8">
                    <div className="relative mx-auto flex max-w-2xl flex-col gap-16 bg-primary-600 px-6 pb-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 lg:pl-0 lg:ring-0 xl:gap-x-20 xl:pr-20">
                        <div className="absolute -top-[0.54rem] right-0 hidden w-[calc(100%-12rem)] justify-center lg:flex">
                            <div className="h-1.5 w-[93.6%] bg-primary-800 [border-top-left-radius:15.625rem;] [border-top-right-radius:15.625rem;] xl:w-[95%]"></div>
                        </div>
                        <div
                            className="absolute top-0 hidden h-full w-full max-w-sm lg:block"
                            aria-hidden="true">
                            {/* top cut out */}
                            <div
                                className={`absolute top-0 h-1/2 w-1/2 ${sectionBackgroundColor}`}></div>
                            <div className="absolute right-0 top-0 h-1/2 w-1/2">
                                <div
                                    className={`h-6 w-6 ${sectionBackgroundColor}`}></div>
                                <div className="absolute inset-0 rounded-tl-3xl bg-primary-600"></div>
                            </div>
                            {/* bottom cut out*/}
                            <div className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-primary-950"></div>
                            <div className="absolute bottom-0 right-0 h-1/2 w-1/2">
                                <div className="absolute bottom-0 h-6 w-6 bg-primary-950"></div>
                                <div className="absolute inset-0 rounded-bl-3xl bg-primary-600">
                                    <svg
                                        className="hidden translate-x-[0.32rem] lg:block w-[14rem] xl:w-[15rem] xl:translate-x-[0.18rem]"
                                        width={404}
                                        height={384}
                                        fill="none"
                                        viewBox="0 0 404 384"
                                        aria-hidden="true">
                                        <defs>
                                            <pattern
                                                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                                x={0}
                                                y={0}
                                                width={20}
                                                height={20}
                                                patternUnits="userSpaceOnUse">
                                                <rect
                                                    x={0}
                                                    y={0}
                                                    width={4}
                                                    height={4}
                                                    className="text-primary-500"
                                                    fill="currentColor"
                                                />
                                            </pattern>
                                        </defs>
                                        <rect
                                            width={404}
                                            height={384}
                                            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                                            ry="15"
                                        />
                                    </svg>
                                    <div className="absolute h-[1.1rem] w-[1.1rem] bottom-0 left-0 bg-primary-950 [clip-path:polygon(44%_69%,105%_105%,10%_100%,0%_8%)]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="relative isolate h-96 lg:aspect-[1/1] lg:h-auto lg:max-w-sm">
                            <MyImage
                                alt=""
                                src={image813}
                                className="h-full w-full flex-none rounded-2xl object-cover shadow-xl"
                                sizes="
                            (min-width: 1024px) 768px,
                            100vw"
                            />
                            {/* mobile divider */}
                            <div
                                className={`absolute inset-0 -z-10 -mx-6 h-[55%] ${sectionBackgroundColor} sm:hidden`}
                                aria-hidden="true">
                                <DividerFooter
                                    className="absolute bottom-0 max-h-28 w-full"
                                    pathThreeClassName={
                                        sectionBackgroundColorAsTextColor
                                    }
                                />
                            </div>
                        </div>

                        <div className="w-full flex-auto">
                            <SectionTitle tag="h2">Join our team</SectionTitle>
                            <SectionBody className="mt-6">
                                <p>
                                    Lorem ipsum dolor sit amet consect
                                    adipisicing elit. Possimus magnam voluptatum
                                    cupiditate veritatis in accusamus quisquam.
                                </p>
                            </SectionBody>
                            <ul
                                role="list"
                                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2">
                                {items.map((item) => (
                                    <li key={item} className="flex gap-x-3">
                                        <CheckCircleIcon
                                            aria-hidden="true"
                                            className="h-7 w-5 flex-none"
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 flex">
                                <TextButton href="#">Click to call</TextButton>
                            </div>
                        </div>
                        <Ribbon
                            className="[&>[data-slot=ribbon-banner]]:normal-case"
                            position="bottom-right"
                            color="bg-primary-800 text-white"
                            shadeColor="bg-primary-700">
                            Enter text here
                        </Ribbon>
                    </div>
                </SectionContainer>
            </div>
        </Section>
    )
}
