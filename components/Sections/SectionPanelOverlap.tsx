import { RoundedButtonWithIcon } from '@/components/Buttons/RoundedButtonWithIcon'
import { SectionButtonGroup } from '@/components/Buttons/SectionButtonGroup'
import { TextButton } from '@/components/Buttons/TextButton'
import { DividerMustacheDotted } from '@/components/Graphics/DividerMustacheDotted'
import { MyImage } from '@/components/MyImage'
import { Section } from '@/components/Sections/Section'
import { SectionBody } from '@/components/Typography/SectionBody'
import { SectionSubtitle } from '@/components/Typography/SectionSubtitle'
import { SectionTitle } from '@/components/Typography/SectionTitle'
import image8411 from '@/public/images/starter/team.jpeg'

interface Props {
    className?: string
    sectionBackgroundColor?: string
}

export function SectionPanelOverlap({
    className,
    sectionBackgroundColor = 'bg-gray-50',
}: Props) {
    const dividerPathThreeColor = sectionBackgroundColor.replace('bg-', 'text-')

    return (
        <Section
            headerTheme="header-primary-dark"
            className={`${className} ${sectionBackgroundColor} relative`}>
            <div className="absolute bottom-0 hidden h-[65%] w-full lg:block">
                <DividerMustacheDotted
                    className="max-h-28 w-full 2xl:max-h-32"
                    pathOneClassName="text-primary-950"
                    pathTwoClassName="text-secondary-400 translate-y-[0.4rem]"
                    pathThreeClassName={dividerPathThreeColor}
                    pathFourClassName="text-primary-400 !-translate-y-2.5"
                />
                <div className="h-full bg-primary-950"></div>
            </div>
            <div className="mx-auto max-w-container bg-primary-600 lg:bg-transparent lg:px-8">
                <div className="lg:grid lg:grid-cols-12">
                    <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                        <div
                            className={`absolute inset-x-0 h-[55%] ${sectionBackgroundColor} lg:hidden`}
                            aria-hidden="true">
                            <DividerMustacheDotted
                                className="absolute bottom-0 max-h-28 w-full"
                                pathOneClassName="text-primary-600"
                                pathTwoClassName="text-transparent"
                                pathThreeClassName={dividerPathThreeColor}
                                pathFourClassName="text-secondary-400"
                            />
                        </div>
                        <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
                            <div className="aspect-h-6 aspect-w-10 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-w-1">
                                <MyImage
                                    className="rounded-3xl object-cover object-center shadow-2xl"
                                    src={image8411}
                                    alt=""
                                    sizes="
                                        (min-width: 1024px) 34vw,
                                        100vw
                                    "
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-primary-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                        <div
                            className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
                            aria-hidden="true">
                            <svg
                                className="absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
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
                                />
                            </svg>
                            <svg
                                className="absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2"
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
                                />
                            </svg>
                        </div>
                        <div className="relative mx-auto max-w-md px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                            <SectionSubtitle>
                                Everything you need
                            </SectionSubtitle>
                            <SectionTitle className="mt-2">
                                No server? No problem.
                            </SectionTitle>
                            <SectionBody className="mt-6">
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Maiores impedit
                                    perferendis suscipit eaque, iste dolor
                                    cupiditate blanditiis.
                                </p>
                            </SectionBody>
                            <SectionButtonGroup className="mt-8">
                                <RoundedButtonWithIcon
                                    href="/blog/a-blog-example"
                                    color="button-primary-light">
                                    Get started
                                </RoundedButtonWithIcon>
                                <TextButton href="/contact">
                                    Contact sales
                                </TextButton>
                            </SectionButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
