export function randomPrice(low, high) {
  let returnValue;

  if (low && high) {
    low = Math.ceil(low);
    high = Math.floor(high);
    returnValue = Math.floor(Math.random() * (high - low) + low);
  }

  return returnValue;
}
