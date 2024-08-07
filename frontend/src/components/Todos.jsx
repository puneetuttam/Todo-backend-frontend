import React from "react";
// const todo=[];
const Todos = ({ todos }) => {
    console.log(todos)
    return (
        <div>
            {todos.map(function (todo) {
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>
                            {todo.completed ? "Completed" : "Mark as Complete"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Todos;
