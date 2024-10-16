import { MyLink } from '@/components/MyLink'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useRouter } from 'next/router'

interface Props {
    className?: string
}

export function Breadcrumbs(props: Props) {
    const className = clsx('flex', props.className)

    const router = useRouter()

    return (
        <nav className={className} aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <div>
                        <MyLink
                            href="/"
                            className="text-gray-400 hover:text-gray-500">
                            <HomeIcon
                                className="h-5 w-5 flex-shrink-0"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Home</span>
                        </MyLink>
                    </div>
                </li>
                {generateBreadcrumbs(router).map((page) => (
                    <li key={`${page.name}${page.href}`}>
                        <div className="flex items-center">
                            <ChevronRightIcon
                                className="h-5 w-5 flex-shrink-0 text-gray-300"
                                aria-hidden="true"
                            />
                            <MyLink
                                href={page.href}
                                className="ml-4 text-xs text-gray-500 first-letter:capitalize hover:text-gray-700"
                                aria-current={
                                    page.current ? 'page' : undefined
                                }>
                                {page.name.replaceAll('-', ' ')}
                            </MyLink>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}

function generateBreadcrumbs(router: any) {
    // Remove any query parameters, as those aren't included in breadcrumbs
    const pathWithoutQuery = router.asPath.split('?')[0]

    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const pathSegments = pathWithoutQuery
        .split('/')
        .filter((pathSegment: string) => pathSegment.length > 0)

    const crumbs = pathSegments.map((pathSegment: string, index: number) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/')
        const isLast = index === pathSegments.length - 1
        return {
            href,
            name: pathSegment,
            current: isLast,
        }
    })

    return [...crumbs]
}
