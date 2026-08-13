import './App.css'
import Shelf from './components/Shelf'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Immerries</h1>
        <p>Your diary shelf</p>
      </header>
      <Shelf />
    </div>
  )
}

export default App