export interface InterfaceItemFaqOffset {
    id: number
    index?: number
    title: string | React.ReactNode
    body: React.ReactNode
}

export function ItemFaqOffset({
    title,
    body,
}: InterfaceItemFaqOffset) {
    return (
        <div>
            <dt className="text-base font-semibold leading-7 text-[--itemTitleColor]">
                {title}
            </dt>
            <dd className="mt-2 text-base leading-7 text-[--itemBodyColor]">
                {body}
            </dd>
        </div>
    )
}
