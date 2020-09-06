const toDoForm = document.querySelector(".js_toDo .js_form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");

const TODOS_LIST = 'toDos';

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LIST)

    if(toDos !== null){

    }
}

function paintToDo(text){
    const add_li = document.createElement("li");
    const del_li = document.createElement("button");
    del_li.value = "x";
    const con_li = document.createElement("span");
    con_li.innerText = text;

    add_li.appendChild(con_li);
    add_li.appendChild(del_li);
    toDoList.appendChild(add_li)
}

function addToDos(event){
    event.preventDefault();

    const newList = toDoInput.value;
    paintToDo(newList)
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",addToDos)
}

init();