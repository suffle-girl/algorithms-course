const binary_search = (array, key) => {
  let first = 0;
  let last = array.length - 1;

  while (first <= last) {
    let midpoint = Math.floor(first + last / 2);

    if (array[midpoint] === key) {
      // best case scenario / or when the algorithm finds the right answear
      return midpoint;
    } else if (array[midpoint] < key) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }

  return -1;
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// in this case the list HAS TO BE SORTED - otherwise the implementation won't work

const result = binary_search(list, 10);

console.log(result);

const verify = (index) => {
  if (index !== -1) {
    console.log('Target found in index: ', index);
  } else {
    console.log('Target not found in the list.');
  }
};

verify(result);
