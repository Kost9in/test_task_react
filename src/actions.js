export const chooseBook = bookId => ({ type: 'CHOOSE_BOOK', bookId });
export const chooseData = data => ({ type: 'CHOOSE_DATA', data });
export const loadData = (type, data) => ({ type: `${type}_LOAD_DATA`, data });