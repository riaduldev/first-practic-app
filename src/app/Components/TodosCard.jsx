const TodoCard = ({ todo }) => {
  return (
    <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {" "}
      <div className="flex items-start gap-4">
        {" "}
        {/* Status */}{" "}
        <div
          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${todo.completed ? "border-green-500 bg-green-500 text-white" : "border-gray-300"}`}
        >
          {" "}
          {todo.completed && "✓"}{" "}
        </div>{" "}
        {/* Todo Information */}{" "}
        <div className="flex-1">
          {" "}
          <h2
            className={`text-lg font-semibold ${todo.completed ? "text-gray-400 line-through" : "text-gray-800"}`}
          >
            {" "}
            {todo.title}{" "}
          </h2>{" "}
          <div className="mt-2 flex gap-3 text-sm text-gray-500">
            {" "}
            <span>User ID: {todo.userId}</span> <span>•</span>{" "}
            <span>Todo ID: {todo.id}</span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default TodoCard;
