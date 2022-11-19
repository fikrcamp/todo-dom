document.querySelector("#add").addEventListener("click",function(){
    let task = document.querySelector("#input").value
    let div = document.createElement("div")
    div.className = "new"
    div.innerText = task
    document.querySelector(".tasks").appendChild(div)
    document.querySelector(".new").classList.add("tasks", "task")
})