  // Only change code below this line
  
  function mySplice(arr1,arr2,n){

    arr2.splice(n,0,...arr1.reverse());
    return arr2;
}
 // Only change code below this line


console.log(mySplice([1,2,3],[4,5],1)); // Change this line
console.log(mySplice([1,2,3],[4,5],2)); // Change this line
console.log(mySplice(["b","c"],["a","d"],1)); // Change this line
console.log(mySplice(["Dell","Philips"],["Samsung","AOX","Sony"],2)); // Change this line

module.exports=mySplice;