Shelf.jsx
import './Shelf.css'

const generateBooks = () => {
    const shelves = []
    const maxShelves = 1
    const maxNbBooksPerShelve = 11;

    for (let i = 0; i < maxShelves; i++) {
        const books = []
        const numBooks = maxNbBooksPerShelve
        for (let j = 0; j < numBooks; j++) {
            books.push({
                id: `${i}-${j}`,
                title: `Journal  ${j + 1}`,
                color: '#8e44ad',
                height: 400 + Math.floor(Math.random() * 60),
                thickness: 100,
            })
        }
        shelves.push({ id: i, books })
    }
    return shelves
}

function Shelf() {
    const shelves = generateBooks()

    return (
        <div className="scene">
            <div className="bookshelf">
                <div className="shelf-frame">
                    <div className="pillar left"></div>
                    <div className="pillar right"></div>
                </div>

                <div className="shelves-container">
                    {shelves.map((shelf) => (
                        <div key={shelf.id} className="shelf-row">
                            <div className="shelf-plank"></div>
                            <div className="books-wrapper">
                                {shelf.books.map((book) => (
                                    <div
                                        key={book.id}
                                        className="book"
                                        style={{
                                            backgroundColor: book.color,
                                            height: `${book.height}px`,
                                            width: `${book.thickness}px`,
                                        }}
                                        title={book.title}
                                    >
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-spine"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="shelf-base"></div>
            </div>
        </div>
    )
}

export default Shelf