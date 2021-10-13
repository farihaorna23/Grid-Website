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
    
    //alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
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