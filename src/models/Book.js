import { v4 as uuidv4 } from 'uuid';

export function createBook(title = 'Untitled', color, size) {
    return {
        id: uuidv4(),
        title: title,
        chapters: [],
        pages: [],
        size: size,
        color: color,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
}
