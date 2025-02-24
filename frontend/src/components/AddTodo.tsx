import { useState } from "react";
import { Todo } from "./Model";

interface Props {
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AddTodo = ({ setTodos, Todos }: Props) => {
  const [todo, setTodo] = useState<string>("");

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();

    if (!todo.trim()) return; // Prevent adding empty tasks

    setTodos([
      ...Todos,
      {
        id: Date.now(),
        todo: todo,
        isDone: false,
      },
    ]);
    setTodo("");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 w-full mt-6">
      {/* Taskify Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide drop-shadow-lg font-[Poppins] animate-fadeIn text-center">
        Taskify
      </h1>

      {/* Input Section */}
      <form
        onSubmit={handleAddItem}
        className="flex w-full max-w-xl bg-white bg-opacity-20 backdrop-blur-lg p-2 sm:p-3 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
      >
        {/* Task Input */}
        <input
          type="text"
          placeholder="Enter a task..."
          className="flex-1 text-base sm:text-lg px-3 sm:px-5 py-2 rounded-l-3xl border-none outline-none bg-transparent text-white placeholder-gray-300 font-[Montserrat] focus:text-black"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        {/* Add Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-3xl text-base sm:text-lg font-medium transition-all duration-300 shadow-md transform hover:scale-105 font-[Poppins] hover:shadow-blue-500/50"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
