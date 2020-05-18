const storedState = JSON.parse(localStorage.getItem('appState'));
const listDefaultState = storedState.list;

export default (state = listDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.itemToAdd
      ]
    case 'REMOVE_ITEM':
      return state.filter((item) => {
        return item.id !== action.itemToRemove.id;
      });
    case 'CHECK_ITEM':
      console.log('check');
      
      return state;
    case 'UNCHECK_ITEM':
      console.log('uncheck');
      
      return state;
    default:
      return state;
  }
};
