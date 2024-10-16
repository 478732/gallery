import { MyLink } from '@/components/MyLink'
import { navigationItems } from '@/data/navigation-items'
import clsx from 'clsx'

interface Props {
    className?: string
}

export function FooterNavigation(props: Props) {
    const className = clsx(props.className, 'flex flex-wrap gap-y-10')

    return (
        <nav className={className}>
            {navigationItems.map((item, index) => (
                <div
                    key={item.id}
                    className={`w-1/2 sm:w-1/3 lg:w-1/4 ${
                        index > 0 && index % 4 > 0 ? 'lg:pl-9' : ''
                    }`}>
                    {item.children && item.children.length > 0 ? (
                        <h3 className="text-sm font-semibold leading-6 text-white">
                            {item.name}
                        </h3>
                    ) : (
                        <h3>
                            <MyLink
                                href={item.href}
                                className="text-sm font-semibold leading-6 text-white hover:text-primary-300">
                                {item.name}
                            </MyLink>
                        </h3>
                    )}
                    {item.children && item.children.length > 0 && (
                        <ul role="list" className="mt-6 space-y-4">
                            {item.children.map((item) => (
                                <li key={item.id}>
                                    <MyLink
                                        href={item.href}
                                        className="text-sm leading-6 text-primary-300 hover:text-white">
                                        {item.name}
                                    </MyLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </nav>
    )
}
