//javascript

//making the process of click
document.querySelector("#add").addEventListener("click", function () {
    //storing a value from my input
    let value = document.querySelector("#input").value
    //making a new element "Div"
    let element = document.createElement("div")
    //giving a value my new element or innerText with accessing my value from my input
    element.innerText = value
    //to indecate where the new div will be added or his place
    document.querySelector(".tasks").appendChild(element).classList.add("task")
})