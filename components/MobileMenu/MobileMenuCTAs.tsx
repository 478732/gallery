import { MyLink } from '@/components/MyLink'
import clsx from 'clsx'

interface Props {
    className?: string
}

export function MobileMenuCTAs(props: Props) {
    const className = clsx(
        props.className,
        'grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center'
    )

    return (
        <div className={className}>
            <MyLink
                href="/blog"
                className="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100">
                Watch demo
            </MyLink>
            <MyLink
                href="/contact"
                className="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100">
                Contact sales
            </MyLink>
        </div>
    )
}
