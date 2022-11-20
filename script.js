 

let add =document.querySelector("#add");

add.addEventListener("click" ,function(){
    let list= document.createElement("div");
    let input =document.querySelector("#input").value;
    const task =document.querySelector("#task");
    list.innerText= input;
    list.classList= "task";
    task.appendChild(list);
    
})
