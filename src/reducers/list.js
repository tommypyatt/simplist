const listDefaultState = [];

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
    default:
      return state;
  }
};
