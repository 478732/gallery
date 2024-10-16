function validateUniqueIds(items: any[]): void {
    if(hasChildren(items)) {
        validateItemsWithChildren(items)
    }
    else {
        validateItems(items)
    }
}

function validateItems(items: any[]) {
    const seenIds = new Set<number>()

    for (const item of items) {
        if (seenIds.has(item.id)) {
            throw new Error(`Duplicate ID found: ${item.id} - ${JSON.stringify(item)}`)
        }
        seenIds.add(item.id)
    }
}

const validateItemsWithChildren = (items: any[]) => {
    const seenIds = new Set();

    const checkIds = (itemList:any[]) => {
        for (const item of itemList) {
            if (seenIds.has(item.id)) {
                throw new Error(`Duplicate ID found: ${item.id} - ${JSON.stringify(item)}`)
            }

            seenIds.add(item.id);
            
            if (item.children) {
                checkIds(item.children); // No need to check return value, just throw on duplicate
            }
        }
    };

    checkIds(items); // Call the inner function
};

function hasChildren(arr:any) {
    for (const obj of arr) {
        // Check if the current object has the 'children' property
        if (obj.children) {
            return true;
        }
        // Check for nested objects or arrays
        for (const value of Object.values(obj)) {
            if (typeof value === 'object' && value !== null) {
                // If it's an array or object, check recursively
                if (Array.isArray(value) && hasChildren(value)) {
                    return true;
                }
                if (hasChildren([value])) {
                    return true;
                }
            }
        }
    }
    return false;
}

export function hasDuplicateId(items: any[]): any[] {
    if(process.env.NODE_ENV == "development"){        
        try {
            validateUniqueIds(items)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    
    return items
}