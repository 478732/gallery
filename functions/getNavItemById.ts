import { callToActionItems, navigationItems } from '@/data/navigation-items';

const getItemById = (items: any[], id: number) => {
    const item = items.find(item => item.id === id);

    if (!item) {
        throw new Error(`ID ${id} not found`);
    }

    return item;
};

export const getNavItemById = (id: number) => getItemById(navigationItems, id);

export const getCallToActionItemById = (id: number) => getItemById(callToActionItems, id);
