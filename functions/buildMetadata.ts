import { openGraphImage } from '@/app/shared-metadata'
import { app } from '@/data/app'

interface Props {
    canonicalUrl: string
    title: string
    description: string
}

function isValidUrl(url:string) {
    const regex = /^(https?:\/\/).+\.com$/;
    return regex.test(url);
}

export function buildMetadata({ canonicalUrl, title, description }: Props) {
    if(!isValidUrl(canonicalUrl)) {
        throw new Error(`Canonical ${canonicalUrl} is not valid`);
    }

    return {
        alternates: {
            canonical: canonicalUrl,
        },
        title: title,
        description: description,
        openGraph: {
            ...openGraphImage,
            title: title,
            description: description,
            url: canonicalUrl,
            siteName: app.companyName,
            type: 'website',
        },
    }
}
