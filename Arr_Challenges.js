//always Hungry
function alwaysHungry(arr) {
    var foodFound=false;
   for (i=0;i<arr.length;i++)
        if (arr[i]=="food"){
            console.log("Yummy!")
            foodFound=true;
        } 
    if (!foodFound){
        console.log("I'm Hungry");
    }       
 }
 
 
alwaysHungry([3.14, "food", "pie", true, "food"]); // this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);// this should console log "I'm hungry"

//High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for(i=0;i<arr.length;i++)
        if (arr[i]> cutoff)
            {filteredArr.push(arr[i]); }
    
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//Better Than Average

function betterThanAverage(arr) {
    var sum = 0;
    for (i=0;i<arr.length;i++)
            {sum+=arr[i];}
    average=sum/arr.length;
    var count = 0
    for (i=0;i<arr.length;i++)
        if(arr[i]>average){
            count++;
        }
   
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//reverse Array

function reverse(arr) {
   var revarr = []; // your code here
   for(i=arr.length-1;i>=0;i--)
    {revarr.push(arr[i]);}

   return revarr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//Fibanacci numbers

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var i = 2;i < n; i++) {
        item=fibArr[i-1]+fibArr[i-2];
        fibArr.push(item);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
