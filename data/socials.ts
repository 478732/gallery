import { LogoFacebookIcon } from '@/components/Logos/FontAwesome/LogoFacebookIcon'
import { LogoInstagramIcon } from '@/components/Logos/FontAwesome/LogoInstagramIcon'
import { LogoTwitterIcon } from '@/components/Logos/FontAwesome/LogoTwitterIcon'
import { LogoYouTubeIcon } from '@/components/Logos/FontAwesome/LogoYouTubeIcon'
import { hasDuplicateId } from '@/functions/hasDuplicateId'

interface Socials {
    id:number
    name: string
    href: string
    IconComponent: React.ComponentType<any>
}

export const socials: Socials[] = [
    {
        id:1,
        name: 'Facebook',
        href: 'https://www.facebook.com/',
        IconComponent: LogoFacebookIcon,
    },

    {
        id:2,
        name: 'Instagram',
        href: 'https://www.instagram.com/',
        IconComponent: LogoInstagramIcon,
    },
    {
        id:3,
        name: 'Twitter',
        href: 'https://twitter.com/',
        IconComponent: LogoTwitterIcon,
    },
    {
        id:4,
        name: 'YouTube',
        href: 'https://www.youtube.com/',
        IconComponent: LogoYouTubeIcon,
    },
]

hasDuplicateId(socials)
