const storedState = JSON.parse(localStorage.getItem('appState'));
const recentsListDefaultState = storedState ? storedState.recentsList : [];

export default (state = recentsListDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.find((item) =>  ( item.name === action.itemToAdd.name ) ) ?
        [...state] : [
          ...state,
          action.itemToAdd
        ]
    default:
      return state;
  }
};
