const TodoItem = (
  {
    todo = {
      _id: (new Date()).getTime(),
      done: true,
      title: 'Buy milk',
      status: 'COMPLETED'
    }
  }) => {
    return (
      <li key={todo._id}>
        <input type="checkbox" defaultChecked={todo.done}/>
        {todo.title}
        ({todo.status})
      </li>
    );
}
export default TodoItem;  