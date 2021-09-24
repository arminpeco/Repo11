  // Only change code below this line
    function myBouncer(arr) {
        var brojac=0;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]=="" || arr[i]==0 || arr[i]==null ||
             arr[i]==undefined || arr[i]==NaN )
              brojac++;
            
        }

    
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]=="" || arr[i]==0 || arr[i]==null ||
             arr[i]==undefined || arr[i]==NaN )
              arr.splice(i,brojac);
            
        }
        return arr;
    }

// Only change code below this line


console.log(myBouncer([7,"ate","",false,9])); // Change this line
console.log(myBouncer(["a","b","c"])); // Change this line
console.log(myBouncer([false,null,0,NaN,undefined,""])); // Change this line
console.log(myBouncer([null,NaN,1,2,undefined])); // Change this line



module.exports=myBouncer;