"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/todoList").build();

//Disable send button until connection is established
document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (todo) {
    var li = document.createElement("li");
    document.getElementById("listTodo").appendChild(li);
    // We can assign user-supplied strings to an element's textContent because it
    // is not interpreted as markup. If you're assigning in any other way, you 
    // should be aware of possible script injection concerns.
    li.textContent = `${todo}`;
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var todo = document.getElementById("todoInput").value;
    connection.invoke("SendElement", todo).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});
