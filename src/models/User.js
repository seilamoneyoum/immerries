import { v4 as uuidv4 } from 'uuid';

export function createUser(background) {
    return {
        id: uuidv4(),
        background: background,
        shelves: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
}
