
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { clearTodo, deleteTodo, toggleTodo, editTodo } from "../../store/todoReducer";





const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id, newText) => {
    dispatch(editTodo({ id, text: newText }));
  };

  const handleClearList = () => {
    dispatch(clearTodo());
  };

  return (
    <div>
      <div>
        {todoList?.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onToggle={() => handleToggle(todo.id)}
            onDelete={() => handleDelete(todo.id)}
            onEdit={handleEdit}  
          />
        ))}
      </div>
      <div className="clear-wrapper">
        <img
          src="https://media3.giphy.com/media/XGNafjOYE7g88/100w.gif"
          alt="Clear"
          onClick={handleClearList}
          className="clear-button"
          width="50"
          height="50"
        />
      </div>
    </div>
  );
};

export default TodoList;
