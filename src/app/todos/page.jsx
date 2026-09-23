import TodoCard from "../Components/TodosCard";

const TodosPage =async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                todos.map((todo) => <TodoCard key={todo.id} todo = {todo}></TodoCard>)
            }
            
        </div>
    );
};

export default TodosPage;