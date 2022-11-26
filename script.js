// console.log("hello");
//  click process
document.querySelector("#add").addEventListener("click",function(){
    // variable from input value
    let Task=document.querySelector("#input").value
        // creating new element
    let element =document.createElement("div")
        //giving value to the element
    element.innerText=Task
        //adding to nw class
    element.className("task")
        // new div will go
    document.querySelector(".Tasks").appendChild("element")
    
    
})