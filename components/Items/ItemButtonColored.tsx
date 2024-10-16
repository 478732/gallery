import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { MyLink } from '@/components/MyLink'

export interface InterfaceItemButtonColored {
    id: number
    title: string | React.ReactNode
    href: string
    IconComponent: React.ComponentType<any>
    iconSize?: string
    iconStrokeWidth?: number
}

export function ItemButtonColored({
    iconStrokeWidth,
    IconComponent,
    href,
    iconSize = 'h-5 w-5',
    title,
}: InterfaceItemButtonColored) {
    const iconComponentProps: { strokeWidth?: number } = {}

    if (iconStrokeWidth && iconStrokeWidth > 0) {
        iconComponentProps.strokeWidth = iconStrokeWidth
    }

    return (
        <MyLink
            href={href}
            className="group relative flex items-center justify-between bg-white p-3.5 text-sm leading-6 transition-all hover:z-10 hover:scale-105 hover:rounded-lg hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
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
