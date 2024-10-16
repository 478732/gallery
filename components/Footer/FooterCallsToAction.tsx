import { RoundedOutlineButtonWithIcon } from '@/components/Buttons/RoundedOutlineButtonWithIcon'
// import { WufooFormNewsletter } from '@/components/Forms/WufooFormNewsletter'
import { FormNewsletter } from '@/components/Forms/FormNewsletter'
import { HrefEmail } from '@/components/HrefEmail'
import { HrefTelephone } from '@/components/HrefTelephone'
import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { MyLink } from '@/components/MyLink'
import { location } from '@/data/location'
import { socials } from '@/data/socials'
import { ClockIcon } from '@heroicons/react/24/outline'

interface Props {
    className?: string
}

const Subtitle = (props: { children: React.ReactNode }) => (
    <p className="text-xs font-medium text-primary-200">{props.children}</p>
)

const Title = (props: { children: React.ReactNode }) => (
    <h3 className="mt-2 text-lg font-semibold text-white">{props.children}</h3>
)

const ContactButton = (props: { href: string; children: React.ReactNode }) => (
    <RoundedOutlineButtonWithIcon
        size="rounded-button-with-icon-xl lg:rounded-button-with-icon-base"
        href={props.href}
        className="mt-2 w-full justify-center lg:mt-0 lg:w-auto">
        {props.children}
    </RoundedOutlineButtonWithIcon>
)

const borderLeftStyles =
    'lg:border-l lg:border-dashed lg:border-primary-900/40 lg:pl-4'

export function FooterCallsToAction(props: Props) {
    return (
        <div
            className={`${props.className} space-y-16 text-center lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-y-0 lg:text-left xl:gap-x-0`}>
            <div className="space-y-8">
                <div>
                    <Subtitle>We&apos;re here to help</Subtitle>
                    <Title>Contact us</Title>
                </div>
                <div className="space-y-4">
                    <h3 className="lg:flex lg:items-center lg:space-x-4">
                        <span className="text-xs font-medium text-primary-300 lg:flex-shrink-0">
                            Call us
                        </span>
                        <ContactButton href={HrefTelephone(location.telephone)}>
                            {location.telephone}
                        </ContactButton>
                    </h3>
                    <h3 className="lg:flex lg:items-center lg:space-x-4">
                        <span className="text-xs font-medium text-primary-300 lg:flex-shrink-0">
                            Email us
                        </span>
                        <ContactButton href={HrefEmail(location.email)}>
                            {location.email}
                        </ContactButton>
                    </h3>
                </div>
                <div className="flex justify-center space-x-[1.67rem] lg:justify-start">
                    {socials.map((item) => (
                        <MyLink
                            key={item.id}
                            href={item.href}
                            className="text-primary-400 hover:text-white">
                            <span className="sr-only">{item.name}</span>
                            <item.IconComponent
                                className="h-[1.35rem] w-[1.35rem]"
                                aria-hidden="true"
                            />
                        </MyLink>
                    ))}
                </div>
            </div>
            <div className={`space-y-8 ${borderLeftStyles}`}>
                <div>
                    <Subtitle>We&apos;re here to help</Subtitle>
                    <Title>Contact us</Title>
                </div>
                <div className="text-sm leading-6 text-white">
                    <span className="block">{location.address.street}</span>
                    <span className="block">
                        {location.address.city}, {location.address.state}{' '}
                        {location.address.zip}
                    </span>
                    <MyLink
                        href={location.address.map}
                        className="group mt-4 inline-flex items-center text-xs font-semibold leading-6 text-primary-300 hover:text-white">
                        See map and directions
                        <IconChevronAnimated
                            className="-mr-1 ml-2.5"
                            color="stroke-primary-400 group-hover:stroke-white"
                        />
                    </MyLink>
                </div>
            </div>
            <div
                className={`flex flex-col items-center space-y-8 lg:items-start ${borderLeftStyles}`}>
                <div>
                    <Subtitle>We&apos;re here to help</Subtitle>
                    <Title>Contact us</Title>
                </div>

                <div className="space-y-4 text-sm">
                    {location.hours.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between space-x-6 lg:flex-col lg:justify-start">
                            <div className="flex items-center">
                                <ClockIcon className="mr-2.5 h-4 w-4 text-primary-300"></ClockIcon>
                                <span className="font-medium text-white">
                                    {item.day}
                                </span>
                            </div>
                            <span className="text-primary-300 lg:mt-1 lg:translate-x-[0.13rem]">
                                {item.time}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`space-y-8 ${borderLeftStyles}`}>
                <div>
                    <Subtitle>We&apos;re here to help</Subtitle>
                    <Title>Contact us</Title>
                </div>

                <div>
                    {/* <WufooFormNewsletter className="mx-auto mt-[1.13rem] sm:max-w-md" /> */}
                    <FormNewsletter className="mx-auto sm:max-w-md" />
                </div>
            </div>
        </div>
    )
}
