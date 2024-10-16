import { TextButton } from '@/components/Buttons/TextButton'

export interface InterfaceItemIconTwoColumnInline {
    id: number
    title: string | React.ReactNode
    body: string | React.ReactNode
    buttonHref?: string
    buttonText?: string
    IconComponent: React.ComponentType<any>
    iconSize?: string
    iconStrokeWidth?: number
}

export function ItemIconTwoColumnInline({
    iconStrokeWidth,
    IconComponent,
    title,
    iconSize = 'h-5 w-5',
    body,
    buttonText,
    buttonHref,
}: InterfaceItemIconTwoColumnInline) {
    const iconComponentProps: { strokeWidth?: number } = {}

    if (iconStrokeWidth && iconStrokeWidth > 0) {
        iconComponentProps.strokeWidth = iconStrokeWidth
    }

    return (
        <div className="relative pl-9">
            <dt className="inline font-semibold text-[--itemTitleColor]">
                <IconComponent
                    className={`${iconSize} absolute left-1 top-1 text-[--itemIconColor]`}
                    aria-hidden="true"
                    {...iconComponentProps}
                />
                {title}
            </dt>{' '}
            <dd className="inline text-[--itemBodyColor]">{body}</dd>
            {buttonText && buttonHref && (
                <dd className="mt-4">
                    <TextButton href={buttonHref}>{buttonText}</TextButton>
                </dd>
            )}
        </div>
    )
}
