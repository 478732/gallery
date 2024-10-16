import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'

interface Props {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}

export function Modal(props: Props) {
    return (
        <Transition.Root show={props.isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-[9999999999]"
                onClose={props.setIsOpen}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-2xl transition-opacity" />
                </TransitionChild>

                <div className="fixed inset-0 mx-auto max-w-7xl overflow-y-auto">
                    <button
                        type="button"
                        onClick={() => props.setIsOpen(false)}
                        className="absolute right-0 top-0 mr-4 mt-4 bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white">
                        <XMarkIcon className="h-5 w-5" />
                    </button>
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel className="w-full max-w-5xl">
                                {props.children}
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
