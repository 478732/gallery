import { hasDuplicateId } from '@/functions/hasDuplicateId'

interface Props {
    items: any[]
    ItemComponent: React.ComponentType<any>
}

export function Items({ ItemComponent, items }: Props) {
    hasDuplicateId(items)

    return (
        <>
            {items.map((item, index: number) => (
                <ItemComponent
                    key={item.id}
                    {...item}
                    index={index}
                    numberOfItems={items.length}
                />
            ))}
        </>
    )
}
