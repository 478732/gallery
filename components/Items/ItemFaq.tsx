'use client'

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Transition,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

export interface InterfaceItemFaq {
    id: number
    index?: number
    title: string | React.ReactNode
    body: React.ReactNode
}

export function ItemFaq(props: InterfaceItemFaq) {
    return (
        <Disclosure defaultOpen={props.index === 0} as="div" className="pt-6">
            {({ open }) => (
                <>
                    <dt>
                        <DisclosureButton
                            className={`flex w-full items-start justify-between text-left ${
                                open ? 'text-primary-600' : 'text-gray-900 hover:text-primary-600 transition-colors'
                            }`}>
                            <span className="text-base font-semibold leading-7">
                                {props.title}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                    <MinusSmallIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <PlusSmallIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                )}
                            </span>
                        </DisclosureButton>
                    </dt>
                    <Transition
                        as="dd"
                        className="[transition-property:opacity,transform,max-height] duration-300 ease-in-out"
                        enterFrom="opacity-0 -translate-y-1 max-h-0"
                        enterTo="opacity-100 translate-y-0 max-h-[2000px]"
                        leaveFrom="opacity-100 translate-y-0 max-h-[2000px]"
                        leaveTo="opacity-0 -translate-y-1 max-h-0">
                        <DisclosurePanel className="mt-2 pr-12">
                            <div className="text-base leading-7 text-gray-600">
                                {props.body}
                            </div>
                        </DisclosurePanel>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}
