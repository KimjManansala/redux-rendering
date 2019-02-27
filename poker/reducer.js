const initialState = [
  {
    value: "K",
    suit: "C"
  },
  {
    value: "K",
    suit: "D"
  }
];

const reducer = (state = initialState, action) => {
  // Handle actions here - make sure you don't mutate the state!
  let nextState = [...state];
  const { type } = action;
  switch (type) {
    case "CHANGE_CARD_ONE":
      nextState[0].value = action.values;
      nextState[0].suits = action.suits;
      return nextState;
    case "CHANGE_CARD_TWO":
      nextState[1].value = action.values;
      nextState[1].suits = action.suits;
      return nextState;
    default:
      return nextState;
  }

  // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)

  return state;
};
