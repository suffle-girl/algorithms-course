const newArray = [1, 2, 3];
const arrayTwo = new Array('a', 'b', 'c');
const arrayThree = Array('hello', 'world');

let emptyArray = [];
emptyArray[0] = 1;
emptyArray[9] = 2;

console.log('arrays:', newArray, arrayTwo, arrayThree, emptyArray);

if (1 in newArray) {
  console.log(true);
}

// insert operations
// insert - linerar operation - insert it to the beginning
newArray.unshift(0);
console.log('unshift:', newArray);
// append - constant operation - insert it to the end
newArray.push(4);
console.log('push:', newArray);
// splice - add to a specified location - deletes the previous value on the location - newArray.splice(start, end, newElement);
newArray.splice(0, 1, -1);
console.log('splice:', newArray);
// concat - add without mutating the original array
let concatArray = [].concat(newArray, 25);
console.log('concat:', concatArray);

// remove operations
// remove the last element
arrayThree.pop();
console.log('pop', arrayThree);
// remove a specific element - arrayTwo.splice(index, deleteCount)
arrayTwo.splice(1, 1);
console.log('splice', arrayTwo);

// length
const length = newArray.length;
console.log('newArray:', newArray);
console.log('length:', length);
