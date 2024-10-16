import { DisclosureButton } from '@headlessui/react'

interface Props {
    name: string
    href: string
}

export function MobileNavigationDropdownItem(props: Props) {
    return (
        <DisclosureButton
            as="a"
            href={props.href}
            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
            {props.name}
        </DisclosureButton>
    )
}
