let addtodobutton=document.getElementById("bttn");          //button
let todolist=document.getElementById("data");               //all data list
let inputfield=document.getElementById("in");               //receive data value

//on clicking add task

addtodobutton.addEventListener('click',function(){
    var paragraph=document.createElement('p')               //creating paragraph tag inside the container
    paragraph.classList.add("paragraph-styling")            //calling paragraph-styling from css file
    paragraph.innerText=inputfield.value;                   //inserting the value in paragraph as item
    todolist.appendChild(paragraph);                        //view the item
    inputfield.value="";
    
    //single click on the list item to draw line over it

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })

    //on double clicking to remove list item

    paragraph.addEventListener('dblclick',function(){
        todolist.removeChild(paragraph);
    })
})