import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { MyLink } from '@/components/MyLink'
import clsx from 'clsx'

export interface InterfaceItemButton {
    id: number
    index?: number
    numberOfItems?: number
    title: string | React.ReactNode
    href: string
    IconComponent: React.ComponentType<any>
    iconSize?: string
    iconStrokeWidth?: number
}

export function ItemButton({
    iconStrokeWidth,
    IconComponent,
    index,
    numberOfItems = 0,
    href,
    iconSize = 'h-5 w-5',
    title,
}: InterfaceItemButton) {
    const iconComponentProps: { strokeWidth?: number } = {}

    if (iconStrokeWidth && iconStrokeWidth > 0) {
        iconComponentProps.strokeWidth = iconStrokeWidth
    }

    let borderStyles = null

    if (index !== undefined) {
        borderStyles = clsx(
            'hover:border-0 border-gray-200/70',
            // 1 col
            index !== numberOfItems - 1 && 'border-b',
            // 2 col
            index >= numberOfItems - 2 && 'min-[500px]:border-b-0',
            index % 2 === 0 && 'min-[500px]:border-r',
            // 4 col
            index >= numberOfItems - 4 && 'lg:border-b-0',
            'lg:border-r',
            (index + 1) % 4 === 0 && 'lg:border-r-0'
        )
    }

    const className = clsx(
        'group relative flex items-center justify-between p-4 text-sm leading-6   transition-all hover:z-10 hover:scale-105 hover:rounded-lg  hover:bg-white  hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]',
        borderStyles
    )

    return (
        <MyLink href={href} className={className}>
            <div className="flex items-center">
                <IconComponent
                    className={`${iconSize} mr-2.5 flex-none text-gray-400 group-hover:text-primary-600`}
                    aria-hidden="true"
                    {...iconComponentProps}
                />
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
                    {title}
                </h3>
            </div>
            <IconChevronAnimated color="stroke-gray-300 group-hover:stroke-primary-300" />
        </MyLink>
    )
}
