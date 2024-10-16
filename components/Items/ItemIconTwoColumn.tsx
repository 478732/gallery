import { TextButton } from '@/components/Buttons/TextButton'

export interface InterfaceItemIconTwoColumn {
    id: number
    title: string | React.ReactNode
    body: string | React.ReactNode
    buttonText?: string
    buttonHref?: string
    IconComponent: React.ComponentType<any>
    iconSize?: string
    iconStrokeWidth?: number
}

export function ItemIconTwoColumn({
    iconStrokeWidth,
    IconComponent,
    iconSize = 'h-5 w-5',
    title,
    body,
    buttonText,
    buttonHref,
}: InterfaceItemIconTwoColumn) {
    const iconComponentProps: { strokeWidth?: number } = {}

    if (iconStrokeWidth && iconStrokeWidth > 0) {
        iconComponentProps.strokeWidth = iconStrokeWidth
    }

    return (
        <div className="relative pl-9">
            <dt className="font-semibold text-[--itemTitleColor]">
                <IconComponent
                    className={`${iconSize} absolute left-0 top-1 text-primary-500`}
                    aria-hidden="true"
                    {...iconComponentProps}
                />
                {title}
            </dt>
            <dd className="mt-2">
                {body}
                {buttonText && buttonHref && (
                    <TextButton className="mt-6" href={buttonHref}>
                        {buttonText}
                    </TextButton>
                )}
            </dd>
        </div>
    )
}
