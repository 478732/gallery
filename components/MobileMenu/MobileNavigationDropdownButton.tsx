import { MobileNavigationDropdownItem } from '@/components/MobileMenu/MobileNavigationDropdownItem'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

interface Props {
    className?: string
    name: string
    items: any[]
}

export function MobileNavigationDropdownButton(props: Props) {
    return (
        <Disclosure as="div" className={props.className}>
            {({ open }) => (
                <>
                    <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        {props.name}
                        <ChevronDownIcon
                            className={clsx(
                                open ? 'rotate-180' : '',
                                'h-5 w-5 flex-none'
                            )}
                            aria-hidden="true"
                        />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                        {props.items.map((item: any) => (
                            <MobileNavigationDropdownItem
                                key={item.id}
                                name={item.name}
                                href={item.href}
                            />
                        ))}
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}
