//always Hungry
function alwaysHungry(arr) {
    var foodFound=false;
   for (i=0;i<=arr.length;i++)
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
