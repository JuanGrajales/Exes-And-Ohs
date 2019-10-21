function XO(arr){
  // convert all string to lowercase characters 
  arr = arr.toLowerCase();

  // local variables for X and O count
  let countX = 0;
  let countO = 0;

  // traverse array and count Xs and Os
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === "x")
    countX++;

    if(arr[i] === "o")
    countO++;
  }

  // check if counts match
  if(countX === countO)
  return true;
  else
  return false;
}

function testing(){
  console.log("ooxx => " + XO("ooxx"));
  console.log("xooxx => " + XO("xooxx"));
  console.log("ooxXm => " + XO("ooxXm"));
  console.log("zpzpzpp => " + XO("zpzpzpp"));
  console.log("zzoo => " + XO("zzoo"));
}