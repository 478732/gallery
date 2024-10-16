import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { MyLink } from '@/components/MyLink'
import clsx from 'clsx'

interface Props {
    className?: string
    href: string
    children: React.ReactNode
}

export function TextButtonBig(props: Props) {
    const className = clsx(
        props.className,
        'transition-colors group inline-flex items-center text-base font-semibold leading-6 text-[--textButtonColor] hover:text-[--textButtonHoverColor]'
    )

    return (
        <MyLink href={props.href} className={className}>
            {props.children}
            <IconChevronAnimated
                className="-mr-1 ml-2.5"
                color="stroke-[--textButtonIconColor] group-hover:stroke-[--textButtonIconHoverColor]"
            />
        </MyLink>
    )
}
