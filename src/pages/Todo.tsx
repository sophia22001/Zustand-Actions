import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useTodoStore } from "../store/useTodoStore";

export function TodoScreen() {
  const { user, login, logout } = useAuthStore();
  const { todos, addTodo, toggleTodo, clearTodos } = useTodoStore();
  const [input, setInput] = useState("");

  return (
    <div className="p-5 max-w-md mx-auto">
      {/* Auth 상태 */}
      {user ? (
        <div className="mb-5">
          <p className="text-lg font-medium">Welcome, {user}!</p>
          <button
            onClick={logout}
            className="mt-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => login("Alice")}
          className="px-3 py-1 bg-blue-500 text-blue-400 rounded hover:bg-blue-600 transition"
        >
          Login as Alice
        </button>
      )}

      {/* Todo 입력 */}
      <div className="my-3 flex">
        <input
          type="text"
          placeholder="할 일 입력"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-2 py-2 border border-gray-300 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => {
            if (input.trim()) {
              addTodo(input);
              setInput("");
            }
          }}
          className="px-4 py-2 bg-green-500 text-blue-400 rounded hover:bg-green-600 transition"
        >
          추가
        </button>
      </div>

      {/* Todo 리스트 */}
      <ul className="list-none p-0">
        {todos.map((item) => (
          <li
            key={item.id}
            onClick={() => toggleTodo(item.id)}
            className={`cursor-pointer py-1 text-lg ${
              item.done ? "line-through text-gray-400" : ""
            }`}
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* 완료 개수 */}
      {todos.length > 0 && (
        <p className="text-sm mt-3 text-gray-600">
          {todos.filter((item) => item.done).length} completed out of{" "}
          {todos.length}
        </p>
      )}

      {/* 전체 삭제 버튼 */}
      {todos.length > 0 && (
        <button
          onClick={clearTodos}
          className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          모두 삭제
        </button>
      )}
    </div>
  );
}
