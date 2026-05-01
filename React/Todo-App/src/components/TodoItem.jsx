import { useState } from "react"

function TodoItem({
    todo,
    deleteTodo,
    toggleComplete,
    editTodo
}) {
    const [isEditing, setIsEditing] =
        useState(false)

    const [editedText, setEditedText] =
        useState(todo.text)

    const handleSave = () => {
        editTodo(todo.id, editedText)

        setIsEditing(false)
    }

    return (
        <li className="flex items-center justify-between bg-gray-100 p-3 rounded mb-2">
            
            {isEditing ? (
                <div className="flex gap-2 w-full">
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) =>
                            setEditedText(
                                e.target.value
                            )
                        }
                        className="flex-1 border rounded px-2 py-1"
                    />

                    <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                        Save
                    </button>
                </div>
            ) : (
                <>
                    <span
                        className="flex-1"
                        style={{
                            textDecoration:
                                todo.completed
                                    ? "line-through"
                                    : "none"
                        }}
                    >
                        {todo.text}
                    </span>

                    <div className="flex gap-2">
                        <button
                            onClick={() =>
                                toggleComplete(todo.id)
                            }
                            className="bg-green-500 text-white px-2 py-1 rounded"
                        >
                            {todo.completed
                                ? "Undo"
                                : "Complete"}
                        </button>

                        <button
                            onClick={() =>
                                setIsEditing(true)
                            }
                            className="bg-yellow-500 text-white px-2 py-1 rounded"
                        >
                            Edit
                        </button>

                        <button
                            onClick={() =>
                                deleteTodo(todo.id)
                            }
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
        </li>
    )
}

export default TodoItem