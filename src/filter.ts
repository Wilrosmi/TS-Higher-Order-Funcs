/**
 * Filters each element of an array out if a given function returns false for that element
 * 
 * @param arr - the array to filter using func
 * @param func - the function to decide which array elements to filter
 * 
 * @returns the filtered version of arr, using func
 */
function filter<T>(arr: T[], func: (arg: T) => boolean): T[] {
  const outArr = [];
  for (let element of arr) {
    if (func(element)) {
      outArr.push(element);
    }
  }
  return outArr;
}

export default filter;
