const linearSearch = (array, key) => {
  // returns the index positon of the key if found, else returns -1
  for (i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i;
    }
  }
  return -1;
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = linearSearch(list, 5);

console.log(result);

const verify = (index) => {
  if (index !== -1) {
    console.log('Target found in index: ', index);
  } else {
    console.log('Target not found in the list.');
  }
};

verify(result);
