import { MyLink } from '@/components/MyLink'

interface Props {
    name: string
    href: string
    description: string
    IconComponent: React.ComponentType<any>
}

export function HeaderNavigationDropdownItem(props: Props) {
    return (
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <props.IconComponent
                    className="h-6 w-6 text-gray-600 group-hover:text-primary-600"
                    aria-hidden="true"
                />
            </div>
            <div className="flex-auto">
                <MyLink
                    href={props.href}
                    className="block font-semibold text-gray-900">
                    {props.name}
                    <span className="absolute inset-0" />
                </MyLink>
                <p className="mt-1 text-gray-600">{props.description}</p>
            </div>
        </div>
    )
}
