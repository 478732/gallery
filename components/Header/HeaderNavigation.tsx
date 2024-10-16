import { HeaderNavigationDropdownButton } from '@/components/Header/HeaderNavigationDropdownButton'
import { HeaderNavigationItem } from '@/components/Header/HeaderNavigationItem'
import { navigationItems } from '@/data/navigation-items'
import { PopoverGroup } from '@headlessui/react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

interface Props {
    className?: string
}

export function HeaderNavigation(props: Props) {
    const pathname = usePathname()
    const className = clsx(props.className, 'lg:gap-x-12')
    return (
        <PopoverGroup className={className}>
            {navigationItems.map((item) =>
                item.children && item.children.length > 0 ? (
                    <HeaderNavigationDropdownButton
                        key={item.id}
                        name={item.name}
                        items={item.children}
                        isCurrentPage={item.children.some(
                            (childItem) => childItem.href == pathname
                        )}
                    />
                ) : (
                    <HeaderNavigationItem
                        key={item.id}
                        name={item.name}
                        href={item.href}
                        isCurrentPage={pathname == item.href ? true : false}
                    />
                )
            )}
        </PopoverGroup>
    )
}
