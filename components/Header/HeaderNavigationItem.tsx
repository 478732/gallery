import { MyLink } from '@/components/MyLink'

interface Props {
    name: string
    href: string
    isCurrentPage: boolean
}

export function HeaderNavigationItem(props: Props) {
    return (
        <MyLink
            href={props.href}
            className={`${props.isCurrentPage ? 'text-[--headerNavItemCurrentPageTextColor]' : 'text-[--headerNavItemTextColor] hover:text-[--headerNavItemTextHoverColor]'} text-sm font-semibold leading-6 transition-colors`}>
            {props.name}
        </MyLink>
    )
}
