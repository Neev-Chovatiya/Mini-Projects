import { useEffect, useState } from 'react'

function App() {
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetchNotes()
  }, [])

  const fetchNotes = async () => {
    try {
      const response = await fetch('http://localhost:5000/notes')
      const data = await response.json()
      setNotes(data)
    } catch (error) {
      console.log(error)
    }
  }

  const addNote = async () => {
    if (note.trim() === "") return
    try {
      const response = await fetch('http://localhost:5000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: note })
      })
      const data = await response.json()
      setNotes([...notes, data])
      setNote('')
    } catch (error) {
      console.log(error)
    }
  }

  const deleteNote = async (id) => {
    try {
      await fetch(
        `http://localhost:5000/notes/${id}`,{
          method: "DELETE"
       }
      )
      const updatedNotes = notes.filter(note => note.id !== id)
      setNotes(updatedNotes)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Notes App
        </h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter note"
            value={note}
            onChange={(e) =>
              setNote(e.target.value)
            }
            className="flex-1 border rounded px-3 py-2 outline-none"
          />
          <button onClick={addNote}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
        <div className="mt-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-gray-100 p-3 rounded mb-2 flex justify-between items-center"
            >
              <p>{note.text}</p>
              <button
                onClick={() =>deleteNote(note.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App