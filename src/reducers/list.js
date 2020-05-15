const listDefaultState = [];

export default (state = listDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.itemToAdd
      ]
    default:
      return state;
  }
};
