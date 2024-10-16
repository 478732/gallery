import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { MyLink } from '@/components/MyLink'
import clsx from 'clsx'

interface Props {
    href: string
    children: React.ReactNode
    className?: string
    color?: string
    size?: string
}

export function RoundedButtonWithIcon({
    color = 'button-primary',
    className,
    size = 'rounded-button-with-icon-xl',
    href,
    children,
}: Props) {
    const joinedClassName = clsx(
        'group rounded-button-with-icon',
        '[background-image:--buttonGradient] hover:[background-image:--buttonHoverGradient]',
        color,
        className,
        size
    )

    return (
        <MyLink href={href} className={joinedClassName}>
            {children}

            <IconChevronAnimated
                className="button-icon-mr ml-2.5"
                color="stroke-[--buttonIconColor] group-hover:stroke-[--buttonIconHoverColor]"
            />
        </MyLink>
    )
}
