document.querySelector("#add").addEventListener("click",function(){
    let todo = document.querySelector("#input").value
    let div = document.createElement("div")
    div.className = "task"
    div.innerText = todo
    document.querySelector(".tasks").appendChild(div)
    document.querySelector(".task").classList.add("tasks")
})