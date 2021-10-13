let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    numRows++;//increment
    
    let row= document.createElement("tr"); //<tr></tr>
    row.classList.add("tr"); //<tr className="tr> </tr>
    let col= document.createElement("td");// <td></td>
    col.classList.add("td"); //<td className=td> </td>
    row.appendChild(col);// <tr className="tr"> <td className="td"> </td> </tr>
    document.getElementById("grid").appendChild(row);//append the entirity of tr to the class grid

}
//Add a column
function addC() {
    
    let rows=document.querySelectorAll("tr");//select all the rows cause we need to add cols

    //loop through the rows
    for(let i=0; i<numRows; i++)
    {
        let col=document.createElement("td");//create td for it
        col.classList.add("td");//add className to the td
        rows[i].appendChild(col); //for each current rows append the col
    }

    
    
    //alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    //select the grid id where rows are located
    let del=document.getElementById("grid");
    let remove= del.lastElementChild; //will get the last element.
    del.removeChild(remove);//remove the element from the grid
    
    //alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    //select all the rows
    let rows= document.querySelectorAll("tr");
    
    //go thrugh each rows
    for(let i=0; i<rows.length; i++){
        //get the last box in each row
        let remove=rows[i].lastElementChild;
        //then delete it
        rows[i].removeChild(remove);
    }
    
    //alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function AddEventListeners()
{
          
    //get all the td
    let squares=document.querySelectorAll("td");
    
    //go through each of them
    for(let i=0; i<squares.length; i++)
   {
       //when clicked on targeted box, it will set it to the color selected 
       squares[i].addEventListener("click", (event)=>{
        event.target.style.backgroundColor=colorSelected;
        })
    }
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}