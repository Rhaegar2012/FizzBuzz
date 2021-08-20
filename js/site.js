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
    let rowLength=5;
    let rowTemplate='';
    let tableTemplate='';
    let cell=''
    for(let i=0; i<array.length;i++){
        for(let j=0; j<=rowLength;j++){
            cell=`<td>${array[i]}<td>`
            rowTemplate+=cell;
        }
        rowTemplate="<tr>"+rowTemplate+"<tr>";
        tableTemplate+=rowTemplate;
        rowTemplate='';
    }
    document.getElementById("fizzBuzzTable").innerHTML=tableTemplate;
}