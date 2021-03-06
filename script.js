let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    numRows++;//increment++
    
    let row= document.createElement("tr"); //create element tr
    row.classList.add("tr"); //add className tr to tr
    let col= document.createElement("td");// create element td
    col.classList.add("td"); //add className td to td
    if(numCols==0)
    {
        numCols++;
        row.appendChild(col);// <tr className="tr"> <td clasName="td"> </td> </tr>
    }
    else
    {
        for(let i=0; i<numCols; i++)
        {
            let col= document.createElement("td");// create element td
            col.classList.add("td"); //add className td to td
            row.appendChild(col);
        }
    }
    document.getElementById("grid").appendChild(row);//append the entirity of tr to the class grid
    AddEventListeners();//added helper function to it
}
//Add a column
function addC() {
    numCols++;
    let rows=document.querySelectorAll("tr");//select all the rows cause we need to add cols

    //loop through the rows
    for(let i=0; i<numRows; i++)
    {
        let col=document.createElement("td");//create td for it
        col.classList.add("td");//add className to the td
        rows[i].appendChild(col); //for each current rows append the col
    }
    
    AddEventListeners();
    
    //alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    //select the grid id where rows are located
    let del=document.getElementById("grid");
    let remove= del.lastElementChild; //will get the last element.
    del.removeChild(remove);//remove the element from the grid

    numRows--;
    
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

    numCols--;
    
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
    //select all the td
    let squares=document.querySelectorAll("td"); 
    //then go through all of them and set it to the color to the selected color
    for(let i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor=colorSelected;
    }
    //alert("Clicked Fill All")
}

function clearAll(){
    //Aim: have to turn every box into white.
    //select all the td
    let squares=document.querySelectorAll("td");
    for(let i=0; i<squares.length; i++)
    {
        //go through each of them and set them to white
        squares[i].style.backgroundColor="white";
    }
    
    //alert("Clicked Clear All")
}

function fillU(){
    
    //select all the tr
    let squares=document.querySelectorAll("td")
      //go through each of the td
    for(let i=0; i<squares.length; i++)
    {
        if(!squares[i].style.backgroundColor || squares[i].style.backgroundColor=="white")  //only if td has no color or white color
        {
            squares[i].style.backgroundColor=colorSelected;//set it to the color selected
        }
    }
    
    //alert("Clicked Fill All Uncolored")
}