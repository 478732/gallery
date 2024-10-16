import { HrefTelephone } from '@/components/HrefTelephone'
import { MyLink } from '@/components/MyLink'
import { location } from '@/data/location'
import { PhoneIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

interface Props {
    className?: string
}

export function HeaderTelephone(props: Props) {
    const className = clsx(
        props.className,
        'group flex items-center justify-center text-sm font-medium leading-6 text-[--headerNavItemTextColor] transition-colors hover:text-[--headerNavItemTextHoverColor]'
    )

    return (
        <MyLink href={HrefTelephone(location.telephone)} className={className}>
            <PhoneIcon
                className="mr-2.5 h-5 w-5 flex-none text-[--headerPhoneIconColor] transition-colors group-hover:text-[--headerPhoneIconHoverColor]"
                aria-hidden="true"
            />
            {location.telephone}
        </MyLink>
    )
}
