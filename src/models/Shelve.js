import { v4 as uuidv4 } from 'uuid';

export function createShelve() {
    return {
        id: uuidv4(),
        books: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
}
