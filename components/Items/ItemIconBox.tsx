import { TextButton } from '@/components/Buttons/TextButton'
import { IconBox } from '@/components/Items/IconBox'

export interface InterfaceItemIconBox {
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

export function ItemIconBox({
    IconBoxComponent = IconBox,
    iconStrokeWidth,
    IconComponent,
    iconSize = 'h-6 w-6',
    subtitle,
    title,
    body,
    buttonHref,
    buttonText,
}: InterfaceItemIconBox) {
    const iconComponentProps: { strokeWidth?: number } = {}

    if (iconStrokeWidth && iconStrokeWidth > 0) {
        iconComponentProps.strokeWidth = iconStrokeWidth
    }

    return (
        <div className="flex flex-col">
            <dt className="text-base font-semibold leading-7 text-[--itemTitleColor]">
                <IconBoxComponent className="mb-6">
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
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7">
                <div className="flex-auto text-[--itemBodyColor]">{body}</div>
                {buttonText && buttonHref && (
                    <p className="mt-6">
                        <TextButton href={buttonHref}>{buttonText}</TextButton>
                    </p>
                )}
            </dd>
        </div>
    )
}
