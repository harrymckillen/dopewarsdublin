export function save(key, data) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
    console.log('Object saved to localStorage.');
  } catch (error) {
    console.error('Error saving object to localStorage:', error);
  }
}

export function fetch(key) {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      console.log('No object found in localStorage.');
      return null;
    }
    const data = JSON.parse(serializedData);
    console.log('Object fetched from localStorage.');
    return data;
  } catch (error) {
    console.error('Error fetching object from localStorage:', error);
    return null;
  }
}
