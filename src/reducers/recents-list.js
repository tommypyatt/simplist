const storedState = JSON.parse(localStorage.getItem('appState'));
const recentsListDefaultState = storedState ? storedState.recentsList : [];

export default (state = recentsListDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log('add');
      return [
        ...state,
        action.itemToAdd
      ]
    default:
      return state;
  }
};
