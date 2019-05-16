// notice that we can also dictate what values the objects passed to our functions should have
// function showTodo(todo: { title: string; text: string }) {
//   console.log(`${todo.title}, ${todo.text}`);
// }
function showTodo(todo) {
    console.log(todo.title + ", " + todo.text);
}
var myTodo = { title: "Trash", text: "Take out the trash" };
showTodo(myTodo);
