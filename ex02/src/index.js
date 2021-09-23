// Create a temps array here
var temps=[
    [31,32,19,37],
    [29,27,55,36],
    [17,27,42,46],
    [29,52,21,64],
    [91,27,31,61]

];
// End of temps array here

function myArrayFunction(arr){
    var newTemps=[...arr];
    var averageDayTemp=[];
    // Only change code below this line
   
       for (let i = 0; i < newTemps.length; i++) {
        var suma=0;
           for (let j = 0; j < newTemps[i].length; j++) {
               
               suma+=newTemps[i][j];
               
           }
       
           averageDayTemp.push(suma/4);
         
       }
    // Only change code below this line
    return averageDayTemp;
}
console.log(myArrayFunction(temps)) // Change this line
module.exports=myArrayFunction;