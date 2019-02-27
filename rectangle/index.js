const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

subscribe(()=>{
    console.log(getState())
})
// Write DOM event listeners here, make them dispatch actions to the Redux store

document.getElementById("button").addEventListener("click", e => {
  e.preventDefault();
  let id = e.target.id;
  console.log(id);
  switch (id) {
    case "height":
      dispatch({ type: "ADD_HEIGHT", height: 10 })
      break;
    case "width":
      dispatch({ type: "ADD_WIDTH", width: 10 })
      break;
    case "red":
        console.log('Hi')
      dispatch({ type: "CHANGE_COLOR", color: 'red' })
      break;
    case "blue":
      dispatch({ type: "CHANGE_COLOR", color: 'blue'})
      break;
    default:
      dispatch({type: 'NOTHING HERE'})
  }
});
