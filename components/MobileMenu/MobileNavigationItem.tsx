import { MyLink } from '@/components/MyLink'
import clsx from 'clsx'

interface Props {
    className?: string
    href: string
    name: string
}

export function MobileNavigationItem(props: Props) {
    const className = clsx(
        props.className,
        'block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
    )

    return (
        <MyLink href={props.href} className={className}>
            {props.name}
        </MyLink>
    )
}
