const storedState = JSON.parse(localStorage.getItem('appState'));
const recentsListDefaultState = storedState ? storedState.recentsList : [];

export default (state = recentsListDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const found = state.find((item) => {
        item.name === action.itemToAdd.name
      });

      //debugger;

      if (state.find((item) =>  ( item.name === action.itemToAdd.name ) )) {
        return state;
      } else {
        return [
          ...state,
          action.itemToAdd
        ]
      }
    default:
      return state;
  }
};
