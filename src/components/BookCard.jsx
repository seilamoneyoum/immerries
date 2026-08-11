import './BookCard.css';

function BookCard({ title, status }) {

    const statusText = {
        empty: '📖 Empty',
        'in-progress': '✍️ Writing...',
        full: '✅ Complete',
    }

    return (
        <div
            className="book-cover"
            style={{ backgroundColor: '#4b2d2d' }}
        // Ajouter plus tard un onClick={} ici pour ouvrir un livre
        >
            <h3>{title}</h3>
            <p className="status-label">{statusText[status]}</p>
        </div>
    )
}

export default BookCard; 