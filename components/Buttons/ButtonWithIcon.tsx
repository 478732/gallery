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

export function ButtonWithIcon({
    children,
    color = 'button-primary',
    className,
    size = 'button-with-icon-lg',
    href,
}: Props) {
    const joinedClassName = clsx(
        'group button-with-icon',
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
