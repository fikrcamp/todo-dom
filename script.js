
  document.querySelector("#add").addEventListener("click", function(){
    let task =  document.querySelector("#input").value;

    let newTask = document.createElement("div"); 
    newTask.innerText = task;

    document.querySelector(".tasks").appendChild(newTask);

    // console.log(newTask);
})
