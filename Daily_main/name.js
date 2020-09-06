const nameForm = document.querySelector(".js_name .js_form"),
    nameInput = nameForm.querySelector("input"),
    welcome = document.querySelector(".js_welcome"),
    changeNamebox = document.querySelector(".js_changeName")
    
const USERNAME = "userName",
    SHOW_ON = "show"

var autoFocusName = true
window.addEventListener("load", function(event){
    setInterval(function(){
        if(autoFocusName){
            nameInput.focus()
            autoFocusName = false;
        }
    },500)
})

function loadName(){
    const userName = localStorage.getItem(USERNAME)

    if(userName === null){
        whatIsYourName()
    }else{
        showWelcome(userName);
    }
}

function whatIsYourName(){
    nameForm.classList.add(SHOW_ON)
    nameForm.addEventListener("submit", submitName)
}

function submitName(event){
    event.preventDefault();
    const currentUser = nameInput.value;
    rememberName(currentUser);
    showWelcome(currentUser);
}

function rememberName(text){
    localStorage.setItem(USERNAME, text);
}

function showWelcome(text){
    nameForm.classList.remove(SHOW_ON);
    welcome.classList.add(SHOW_ON);
    welcome.querySelector(".js_hi").innerHTML = `안녕하세요. ${text}님!`;
    welcome.querySelector(".js_changeName").addEventListener("click",changeName)
}

function changeName(){
    welcome.classList.remove(SHOW_ON);
    localStorage.removeItem(USERNAME);
    autoFocusName = true;
    whatIsYourName()
}

function init(){
    loadName()
}

init()