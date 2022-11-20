document.querySelector("#add").addEventListener("click",function(){
   let newTask =  document.querySelector("#input").value
    let newDiv = document.createElement("div")
    let newP = document.createElement("p")
    let newBtn = document.createElement("button")
   newDiv.appendChild(newP)
   newBtn.classList.add("btn")
   newDiv.appendChild(newBtn)
   
   newP.innerText = newTask
   newBtn.innerText = document.querySelector(".btn").innerText
   newDiv.classList.add("task")
   document.querySelector(".tasks").appendChild(newDiv)
   
})

    

