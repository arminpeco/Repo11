  // Only change code below this line
  
  function multiplyArrayFunction(myArray){

     var product=1;
     var suma=0;
     for (let i = 0; i < myArray.length; i++) {
      
           for (let j = 0; j < myArray[i].length; j++) {
               
               suma+=myArray[i][j];
               product*=myArray[i][j];
           }
       
           
         
       }
       return arr=[product,suma];
        
}
  // Only change code below this line


console.log(multiplyArrayFunction([[2],[5,6,7],[8,9]])) // Change this line
console.log(multiplyArrayFunction([[2.5,2],[0.5,0.2],[8]])) // Change this line
console.log(multiplyArrayFunction([[1,2],[3,4,5,6],[7,8,9]])) // Change this line
module.exports=multiplyArrayFunction;