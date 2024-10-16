import { RoundedButtonWithIcon } from '@/components/Buttons/RoundedButtonWithIcon'
import clsx from 'clsx'

interface Props {
    className?: string
}

export function HeaderCTAs(props: Props) {
    const className = clsx(props.className, 'items-center gap-x-6')

    return (
        <div className={className}>
            <RoundedButtonWithIcon
                href="/contact"
                size="rounded-button-with-icon-base">
                Book my free appointment
            </RoundedButtonWithIcon>
        </div>
    )
}
