import fetch from "node-fetch"

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => console.log(data));