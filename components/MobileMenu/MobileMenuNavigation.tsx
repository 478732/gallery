import { MobileNavigationDropdownButton } from '@/components/MobileMenu/MobileNavigationDropdownButton'
import { MobileNavigationItem } from '@/components/MobileMenu/MobileNavigationItem'
import { navigationItems } from '@/data/navigation-items'
import clsx from 'clsx'

interface Props {
    className?: string
}

export function MobileMenuNavigation(props: Props) {
    const className = clsx(props.className, 'space-y-2')

    return (
        <div className={className}>
            {navigationItems.map((item) =>
                item.children && item.children.length > 0 ? (
                    <MobileNavigationDropdownButton
                        className="-mx-3"
                        key={item.id}
                        name={item.name}
                        items={item.children}
                    />
                ) : (
                    <MobileNavigationItem
                        className="-mx-3"
                        key={item.id}
                        name={item.name}
                        href={item.href}
                    />
                )
            )}
        </div>
    )
}
