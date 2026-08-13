import { v4 as uuidv4 } from 'uuid';

export function createChapter(title = 'Untitled', nbPage) {
    return {
        id: uuidv4(),          // Unique identifier
        title: title,
        nbPage: nbPage,
        pages: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
}