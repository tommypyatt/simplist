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
      return state.map((item) => {
        return item.id === action.itemToAdjust.id ? {...item, crossedOut: true} : {...item};
      });
    case 'UNCHECK_ITEM':
      return state.map((item) => {
        return item.id === action.itemToAdjust.id ? {...item, crossedOut: false} : {...item};
      });
    default:
      return state;
  }
};
