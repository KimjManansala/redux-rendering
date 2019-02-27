const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

document.getElementById('nameForm').addEventListener('submit', e=>{
    e.preventDefault()
    let value = document.getElementById('formInput').value
    console.log('hhiii!')
    dispatch({type: 'ADD_NAME', name: value})
})