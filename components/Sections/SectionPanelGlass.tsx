import { TextButton } from '@/components/Buttons/TextButton'
import { MyImage } from '@/components/MyImage'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { SectionBody } from '@/components/Typography/SectionBody'
import { SectionTitle } from '@/components/Typography/SectionTitle'
import image813 from '@/public/images/starter/desk.jpeg'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const items = [
    'Competitive salaries',
    'Flexible work hours',
    '30 days of paid vacation',
    'Annual team retreats',
    'Benefits for you and your family',
    'A great work environment',
]

export function SectionPanelGlass() {
    return (
        <Section className="bg-gray-900 py-24 sm:py-32">
            <div className="relative isolate">
                <SectionContainer className="!px-0 sm:!px-6 lg:!px-8">
                    <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                        <MyImage
                            alt=""
                            src={image813}
                            className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-[1/1] lg:h-auto lg:max-w-sm"
                            sizes="
                            (min-width: 1024px) 768px,
                            100vw"
                        />
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
                    </div>
                </SectionContainer>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
                    <div
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                        className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                    />
                </div>
            </div>
        </Section>
    )
}
