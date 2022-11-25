document.querySelector("#add").addEventListener("click",function(){
    let name = document.querySelector("#input").value

    let div = document.createElement("div")
    div.innerText = name

    document.querySelector(".tasks").appendChild(div)
})