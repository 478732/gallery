interface Props {
    className?: string
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
    size?: string
    color?: string
    shadeColor?: string
    children: React.ReactNode
}

const positions = {
    'top-left': {
        wrapper: '-top-2 -left-2',
        shadeOne: 'top-0 right-0',
        shadeTwo: 'bottom-0 left-0',
        banner: 'bottom-0 left-0 -rotate-45 origin-bottom-left',
    },
    'top-right': {
        wrapper: '-top-2 -right-2',
        shadeOne: 'top-0 left-0',
        shadeTwo: 'bottom-0 right-0',
        banner: 'bottom-0 right-0 rotate-45 origin-bottom-right',
    },
    'bottom-left': {
        wrapper: '-bottom-2 -left-2',
        shadeOne: 'top-0 left-0',
        shadeTwo: 'bottom-0 right-0',
        banner: 'top-0 left-0 rotate-45 origin-top-left',
    },
    'bottom-right': {
        wrapper: '-bottom-2 -right-2',
        shadeOne: 'top-0 right-0',
        shadeTwo: 'bottom-0 left-0',
        banner: 'top-0 right-0 -rotate-45 origin-top-right',
    },
}

export function Ribbon({
    className,
    position = 'top-left',
    size = 'w-36',
    color = 'bg-primary-50 text-primary-700 group-hover:bg-primary-100',
    shadeColor = 'bg-primary-200',
    children,
}: Props) {
    return (
        <div
            className={`${className} ${positions[position].wrapper} ${size} absolute z-10 aspect-[1/1] overflow-hidden rounded-sm`}>
            <div
                className={`${positions[position].shadeOne} ${shadeColor} absolute h-2 w-2 transition-colors`}></div>
            <div
                className={`${positions[position].shadeTwo} ${shadeColor} absolute h-2 w-2 transition-colors`}></div>
            <div
                data-slot="ribbon-banner"
                className={`${positions[position].banner} ${color} absolute block w-square-diagonal py-3 text-center text-xs font-semibold uppercase tracking-wider shadow-sm transition-colors`}>
                {children}
            </div>
        </div>
    )
}
