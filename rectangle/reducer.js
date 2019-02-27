const initialState = {
  width: 100,
  height: 200,
  color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
  // Handle actions here - make sure you don't mutate the state!
  nextState = Object.assign({}, state);
  const { type } = action;

  switch (type) {
    case "ADD_HEIGHT":
      console.log({ ...nextState, height: state.height + action.height });
      return { ...nextState, height: state.height + action.height };
    case "ADD_WIDTH":
      return { ...nextState, width: state.width + action.width };
    case "CHANGE_COLOR":
        console.log(action.color)
      return { ...nextState, color: action.color };
    default:
      return nextState;
  }

  // ACTION 1 - Increment height by 10

  // ACTION 2 - Increment width by 10

  // ACTION 3 - Change the color
};
