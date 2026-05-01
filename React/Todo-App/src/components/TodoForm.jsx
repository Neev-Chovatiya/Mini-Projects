function TodoForm({
    task,
    setTask,
    addTodo
}) {
    return (
        <div className="flex gap-2">
            <input
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) =>
                    setTask(e.target.value)
                }
                className="flex-1 border rounded px-3 py-2 outline-none"
            />

            <button
                onClick={addTodo}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add
            </button>
        </div>
    )
}

export default TodoForm