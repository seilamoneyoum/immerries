import './App.css'
import BookCard from './components/BookCard.jsx'

function App() {
  //  Ajout temporaire, c'est pour tester l'UI
  const books = [
    { id: 1, title: 'Before the trip', status: 'in-progress' },
    { id: 2, title: 'New beginnings', status: 'empty' },
    { id: 3, title: 'Reflections on 2026', status: 'full' },
    { id: 4, title: 'My first journal', status: 'empty' },
  ]

  return (
    <div className="shelf-container">
      <header className="shelf-header">
        <h1>Immerries</h1>
        <p>Your illustrated diary shelf</p>
      </header>


      {/* SHELF + BOOKS */}
      <div className="shelf-grid-wrapper">
        <div className="shelf-grid">
          {/* Map through the static book data */}
          {books.map((book) => (
            <BookCard key={book.id} title={book.title} status={book.status} />
          ))}

          {/* Placeholder for "Add New Book" button (UI only) */}
          <div className="add-book-placeholder">
            <span>+</span>
            <p>New Journal</p>
          </div>
        </div>
      </div>

      {/* Later: The Book Modal (opened book view) will go here */}
      {/* {selectedBook && <BookReader book={selectedBook} />} */}
    </div>
  )
}

export default App