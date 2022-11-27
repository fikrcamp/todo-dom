


document.querySelector("#add").addEventListener("click", function(){

    let todo = document.querySelector("#input").Value


    let newDiv = document.createElement("div")

    newDiv.innerText = todo
    newDiv.classList.add("task")

    document.querySelector(".tasks").appendChild(newDiv)
})






// <!-- <ul id="students">
// <li>Ahmed</li>
// </ul> -->




// document.querySelector("#add").addEventListener("click",function(){
//     //1. get the name from the textbox
//     let name = document.querySelector("#input").value
    
//     // 2. create a new li element   li = <li></li>
//     let li = document.createElement("li")
    
//     //3. inside li text name   <li>Ali</li>
//     li.innerText = name 
    
//     //4. indicat where to put the new li element
//     document.querySelector("#students").appendChild(li)
// })