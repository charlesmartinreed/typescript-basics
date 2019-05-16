// notice that we can also dictate what values the objects passed to our functions should have
// function showTodo(todo: { title: string; text: string }) {
//   console.log(`${todo.title}, ${todo.text}`);
// }

// let myTodo = { title: "Trash", text: "Take out the trash" };

// showTodo(myTodo);

// we can clean this up by using an Interface

interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(`${todo.title}, ${todo.text}`);
}

let myTodo = { title: "Trash", text: "Take out the trash" };

showTodo(myTodo);
