import { hasDuplicateId } from '@/functions/hasDuplicateId'

import { FingerPrintIcon, SquaresPlusIcon } from '@heroicons/react/24/outline'

export interface InterfaceNavItem {
    id: number
    name: string
    href: `/${string}`
    children?: InterfaceNavChildItem[]
}

export interface InterfaceNavChildItem {
    id: number
    name: string
    href: `/${string}`
    description: string
    IconComponent: React.ComponentType<any>
}

export const navigationItems: InterfaceNavItem[] = [
    { id:1, name: 'Analytics', href: '/contact'},
    {
        id:2, 
        name: 'Engagement',
        href: '/blog',
        children: [
            {
                id:3,
                name: 'Security',
                description: 'Your customers’ data will be safe and secure',
                href: '/contact',
                IconComponent: FingerPrintIcon,
            },
            {
                id:4,
                name: 'Integrations',
                description: 'Connect with third-party tools',
                href: '/blog',
                IconComponent: SquaresPlusIcon,
            },
        ],
    },
]

export const callToActionItems: InterfaceNavItem[] = [
    { id:5, name: 'Get my free estimate', href: '/get-free-estimate'},
]

hasDuplicateId(navigationItems)
hasDuplicateId(callToActionItems)