// Create a monitorsListArray array here
var monitorsListArray=["Apple","Peach","Berry"];
// End of monitorsListArray array here

function myMonitorsFunction(arr){
   var newMonitorsList=[...arr];
   var monitorsList=[];
    // Only change code below this line
        for (let i = 0; i < newMonitorsList.length; i++) {
           monitorsList.push([newMonitorsList[i],i+1]);
            
        }

        return monitorsList;
    // Only change code below this line
  
   
}
console.log(myMonitorsFunction(monitorsListArray)) // Change this line
module.exports=myMonitorsFunction;