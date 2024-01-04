import "./Todo.css"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

const Todo = () => {
  return (
    <div className="app">
      {/* <h2 className="text">Todo With Redux</h2> */}
      <img className="imgtop" src="https://cdn.dribbble.com/users/4241563/screenshots/11874468/media/7796309c77cf752615a3f9062e6a3b3d.gif" alt="TODO LIST" width="417" height="390" />
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default Todo
