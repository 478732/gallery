import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { MyLink } from '@/components/MyLink'
import clsx from 'clsx'

interface BaseProps {
    className?: string
    children: React.ReactNode
    invertColor?: boolean
}

interface LinkProps extends BaseProps {
    href: string
    disableLink?: false
}

interface NotALinkProps extends BaseProps {
    href?: never
    disableLink: true
}

type Props = LinkProps | NotALinkProps

export function TextButton({
    disableLink,
    children,
    className,
    href,
    invertColor = false,
}: Props) {
    const buttonColor = invertColor
        ? 'text-[--textButtonColorInverted] hover:text-[--textButtonHoverColorInverted]'
        : 'text-[--textButtonColor] hover:text-[--textButtonHoverColor]'

    const iconColor = invertColor
        ? 'stroke-[--textButtonIconColorInverted] group-hover:stroke-[--textButtonIconHoverColorInverted]'
        : 'stroke-[--textButtonIconColor] group-hover:stroke-[--textButtonIconHoverColor]'

    const joinedClassName = clsx(
        className,
        buttonColor,
        'transition-colors group inline-flex items-center text-sm font-semibold leading-6'
    )

    const Icon = (
        <IconChevronAnimated className="-mr-1 ml-2.5" color={iconColor} />
    )

    return disableLink ? (
        <span className={joinedClassName}>
            {children}
            {Icon}
        </span>
    ) : (
        <MyLink href={href} className={joinedClassName}>
            {children}
            {Icon}
        </MyLink>
    )
}
