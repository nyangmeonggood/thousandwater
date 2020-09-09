const greeting = document.getElementById("greeting"),
    searchPanel = document.getElementById("search-panel"),
    down_arrow = document.getElementById("downArrow")

down_arrow.addEventListener('wheel', function(event){
    if (event.deltaY < 0){
        searchPanel.classList.remove("active")
    }
    else if (event.deltaY > 0){
        greeting.classList.add("active")
        searchPanel.classList.add("active")
        down_arrow.style.display = "none"
    }
})

searchPanel.addEventListener('wheel', function(event){
    if (event.deltaY < 0){
        greeting.classList.remove("active")
        searchPanel.classList.remove("active")
        down_arrow.style.display = "block"
    }
})