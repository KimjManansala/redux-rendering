const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));





dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const add = document.getElementById('addCircle')

add.addEventListener('click', (e)=>{
    e.preventDefault()
    let radius = Math.floor(Math.random() *Math.floor(100) + 1)
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    dispatch({type: 'ADD_CIRCLE', radius: radius, color:getRandomColor()})

})