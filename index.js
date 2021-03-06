// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
//   make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove)
// should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently
// from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

function room(arrayInput) {
  arrayInput.sort((a, b) => a - b);
  const orderedArray = [];
  const stringsArray = [];

  for (let i = 0; i < arrayInput.length; i++) {
    let element = arrayInput[i];
    if (typeof element === 'string') {
      stringsArray.push(element);
      continue;
    }
    let tmpArray = [element];
    while (element === arrayInput[i + 1]) {
      tmpArray.push(arrayInput[i + 1]);
      i++;
    }
    if (tmpArray.length > 0) {
      orderedArray.push(tmpArray);
    } else {
      orderedArray.push(tmpArray.pop());
    }
  }
  if (stringsArray.length > 0) orderedArray.push(stringsArray);
  return orderedArray;
};

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should
// find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4) should
// return [1,3]

const array2 = [1, 2, 4, 4, 2, 1, 5];

function answer(arr, target) {
  for (let i = 0; arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] == target) return [arr[i], arr[k]];
    }
  }
  return [];
}

// Question 3: Write a function that converts HEX to RGB. Then Make that function autodect the formats so that if you enter
// HEX color format it returns RGB and if you enter RGB color format it returns HEX. Bonus: Release this tool as a npm package.

function hexToRgbORvv(v) {
  let trimmedValue = v.trim();
  if (trimmedValue.charAt(0) === '#') {
    trimmedValue = parseInt(trimmedValue.slice(1, 3), 16) + ',' + parseInt(trimmedValue.slice(3, 5), 16) + ','
      + parseInt(trimmedValue.slice(5, 7), 16);
  } else {
    trimmedValue = trimmedValue.toLowerCase();
    trimmedValue = trimmedValue.slice(4, trimmedValue.length - 1);
    const values = trimmedValue.split(',');
    trimmedValue = values.reduce((accumulator, value) => {
      const n = parseInt(value);
      accumulator += ('00' + n.toString(16)).substr(-2);
      return accumulator;
    }, '#');
  }
  return trimmedValue;

}

console.log('Challenge 1-------------------->');
console.log(room(array));
console.log('Challenge 2-------------------->');
console.log(answer(array2, 5));
console.log('Challenge 3-------------------->');
console.log(hexToRgbORvv('#ffffff'));
console.log(hexToRgbORvv('#000000'));
