export const addItem = (array, item) => {
  if(array.indexOf(item) > -1) {
    return array
  }

  return array.concat(item)
}
