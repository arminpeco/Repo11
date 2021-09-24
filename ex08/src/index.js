  // Only change code below this line
  
  function myMutation(arr){
      var s1=arr[0].toUpperCase();
      var s2=arr[1].toUpperCase();
    for(var i = 0; i < s1.length; i++) {
        var c = s2.charAt(i);
        if (s1.indexOf(c) == -1) {
            return false;
        }
    }
    return true;
    
}
 // Only change code below this line


console.log(myMutation(["hello","hey"])); // Change this line
console.log(myMutation(["hello","Hello"])); // Change this line
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba","qrstu"])); // Change this line
console.log(myMutation(["Mary","Army"])); // Change this line
console.log(myMutation(["Mary","Aarmy"])); // Change this line
console.log(myMutation(["Alien","lien"])); // Change this line
console.log(myMutation(["floor","for"])); // Change this line
console.log(myMutation(["hello","neo"])); // Change this line
console.log(myMutation(["voodoo","no"])); // Change this line
console.log(myMutation(["ate","date"])); // Change this line
console.log(myMutation(["Tiger","Zebra"])); // Change this line
console.log(myMutation(["Noel","Ole"])); // Change this line


module.exports=myMutation;