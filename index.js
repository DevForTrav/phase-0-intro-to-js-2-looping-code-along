const writeCards = function (arr, occasion) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(`Thank you, ${arr[i]}, for the wonderful ${occasion} gift!`);
    console.log(i);
  }
  return newArray;
}

let countDown = function (highNum) {
  let counter = highNum;
  while (counter >= 0 )  {
    console.log(counter)
    counter--
  }
}

