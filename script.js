


document.querySelector("#add").addEventListener("click", function(){

    let todo = document.querySelector("#input").Value


    let newDiv = document.createElement("div")

    newDiv.innerText = todo
    newDiv.classList.add("task")

    document.querySelector(".tasks").appendChild(newDiv)
})






