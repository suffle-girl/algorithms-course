const recursiveBinarySearch = (
  array,
  key,
  start = 0,
  end = array.length - 1
) => {
  if (start > end) {
    return -1;
  }

  let midpoint = Math.floor((start + end) / 2);

  if (array[midpoint] === key) {
    return midpoint;
  } else if (key < array[midpoint]) {
    return recursiveBinarySearch(array, key, start, midpoint - 1);
  } else {
    return recursiveBinarySearch(array, key, midpoint + 1, end);
  }
};

const verify = (result) => {
  console.log('Target found: ', result);
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// in this case the list HAS TO BE SORTED - otherwise the implementation won't work

const result = recursiveBinarySearch(list, 10);

verify(result);
