import Link from 'next/link'

function isExternalLink(href: string) {
    return /^http/.test(href)
}

function isActionLink(href: string) {
    return href.startsWith('mailto:') || href.startsWith('tel:')
}

interface Props {
    href: string
    children: React.ReactNode
    target?: string
    rel?: string
    className?: string
}

export function MyLink({ href, target, rel, className, children}: Props) {
    const isExternal = isExternalLink(href);
    const isAction = isActionLink(href);

    const linkProps = {
        className,
        href,
        ...(isExternal && {
            target: target ?? '_blank',
            rel: rel ?? 'noopener noreferrer',
        }),
    };

    const LinkComponent = isAction || isExternal ? 'a' : Link;

    return (
        <LinkComponent {...linkProps}>
            {children}
        </LinkComponent>
    );
}
