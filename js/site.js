//Reads values from form
function getValues(){
    let fizzValue=parseInt(document.getElementById("fizzInput").value);
    let buzzValue=parseInt(document.getElementById("buzzInput").value);
    let fizzBuzzArray=fizzBuzz(fizzValue, buzzValue);
    displayFizzBuzz(fizzBuzzArray);
}
//Builds FizzBuzz array
function fizzBuzz(fizzValue, buzzValue){
    values=[];
    for(let i=0; i<100;i++){
        if(i%fizzValue==0 && i%buzzValue==0){
            values.push('FizzBuzz');
        }
        else if(i%fizzValue==0){
            values.push('Fizz');
        }
        else if(i%buzzValue==0){
            values.push('Buzz');
        }
        else{
            values.push(i);
        }

    }
    return values;
}
//Displays the fizzbuzz values in a table 
function displayFizzBuzz(array){
    //Get table body element from the page
    let tableBody=document.getElementById("fizzBuzzTable");
    //Get the template row
    let templateRow=document.getElementById("fbTemplate");
    //Clear table 
    tableBody.innerHTML="";

    for (let i=0; i<array.length;i+=5){
        let tableRow=document.importNode(templateRow.content,true);
        //Grab just the td and put them into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(array[i]);
        rowCols[0].textContent=array[i];

        rowCols[1].classList.add(array[i+1]);
        rowCols[1].textContent=array[i+1];

        rowCols[2].classList.add(array[i+2]);
        rowCols[2].textContent=array[i+2];

        rowCols[3].classList.add(array[i+3]);
        rowCols[3].textContent=array[i+3];

        rowCols[4].classList.add(array[i+4]);
        rowCols[4].textContent=array[i+4];
        tableBody.appendChild(tableRow);
    }
}