import { MobileMenuCTAs } from '@/components/MobileMenu/MobileMenuCTAs'
import { MobileMenuNavigation } from '@/components/MobileMenu/MobileMenuNavigation'
import { MobileMenuXIcon } from '@/components/MobileMenu/MobileMenuXIcon'
import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import image8124 from '@/public/images/logo-primary.svg'
import { Dialog, DialogPanel } from '@headlessui/react'

interface Props {
    className?: string
    open: boolean
    onClose: any
}

export function MobileMenu(props: Props) {
    return (
        <Dialog
            as="div"
            className={props.className}
            open={props.open}
            onClose={props.onClose}>
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-[9999999999] flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <MyLink href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <MyImage
                                className="h-8 w-auto"
                                src={image8124}
                                alt="Company logo"
                                sizes="76px"
                                backgroundColor=""
                                placeholder="empty"
                            />
                        </MyLink>
                        <MobileMenuXIcon
                            className="-m-2.5 p-2.5"
                            onClick={() => props.onClose(false)}
                        />
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <MobileMenuNavigation className="py-6" />
                            {/* <div className="py-6">
                            <a
                            href="#"
                            className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                            Log in
                            </a>
                        </div> */}
                        </div>
                    </div>
                </div>
                <MobileMenuCTAs className="sticky bottom-0" />
            </DialogPanel>
        </Dialog>
    )
}
