import { TextButton } from '@/components/Buttons/TextButton'
import { IconBox } from '@/components/Items/IconBox'

export interface InterfaceItemIconBoxTwoColumn {
    id: number
    title: string | React.ReactNode
    subtitle?: string | React.ReactNode
    body: React.ReactNode
    buttonHref?: string
    buttonText?: string
    IconBoxComponent?: React.ComponentType<any>
    IconComponent: React.ComponentType<any>
    iconSize?: string
    iconStrokeWidth?: number
}

export function ItemIconBoxTwoColumn({
    IconBoxComponent = IconBox,
    iconStrokeWidth,
    IconComponent,
    iconSize = 'h-6 w-6',
    subtitle,
    title,
    body,
    buttonText,
    buttonHref,
}: InterfaceItemIconBoxTwoColumn) {
    const iconComponentProps: { strokeWidth?: number } = {}

    if (iconStrokeWidth && iconStrokeWidth > 0) {
        iconComponentProps.strokeWidth = iconStrokeWidth
    }

    return (
        <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-[--itemTitleColor]">
                <IconBoxComponent className="absolute left-0 top-0">
                    <IconComponent
                        className={`${iconSize} text-white`}
                        aria-hidden="true"
                        {...iconComponentProps}
                    />
                </IconBoxComponent>
                {subtitle && (
                    <span className="mb-1 block text-sm font-normal leading-[inherit] text-[--itemSubtitleColor]">
                        {subtitle}
                    </span>
                )}
                {title}
            </dt>
            <dd className="mt-2 text-base leading-7">
                <div className="text-[--itemBodyColor]">{body}</div>
                {buttonText && buttonHref && (
                    <p className="mt-6">
                        <TextButton href={buttonHref}>{buttonText}</TextButton>
                    </p>
                )}
            </dd>
        </div>
    )
}
