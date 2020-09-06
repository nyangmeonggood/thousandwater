const toDoForm = document.querySelector(".js_toDo .js_form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");

const TODOS_LIST = 'toDos';

const toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_LIST, JSON.stringify(toDos));
}//localStorage에는 "String"만 저장가능하다. 자바스크립트의 data를 저장할 수가 없다! 그 때 쓰는게 JSON.stringfy

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LIST)

    if(loadedToDos !== null){
        //JSON은 JavaScript Object Notation의 준말. 데이터를 전달할 때 자바스크립트가 그걸 다룰 수 있도록 object형태로 바꿔주는 기능.
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(savedToDos){
            paintToDo(savedToDos.text)
        })
        //forEach() -> array에 담겨있는것들을 각각 한 번에 하나씩 함수를 실행시켜주는것
    }
}

function delToDos(event){
    console.log(event)
}

function paintToDo(text){
    const add_li = document.createElement("li");
    const del_li = document.createElement("button");
    del_li.addEventListener("click",delToDos)
    const con_li = document.createElement("span");
    const newId =  toDos.length + 1;
    con_li.innerText = text;

    add_li.appendChild(del_li);
    add_li.appendChild(con_li);
    add_li.id = `todoList${newId}`;
    toDoList.appendChild(add_li);    

    const toDoObj = {
        text: text,
        id : newId
    }

    toDos.push(toDoObj);
    saveTodos();
}

function addToDos(event){
    event.preventDefault();

    const newList = toDoInput.value;
    paintToDo(newList)
    toDoInput.value = "";
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",addToDos)
}

init();