const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

const suits = ["H", "S", "C", "D"];
const values = ["A", '2', '3', '4', '5', '6', '7', '8', '9', '10', "J", "Q", "K"];

function getRandomSuit(suits, values){
    let ranSuit = Math.floor(Math.random() * Math.floor(3))
    console.log(ranSuit)
    let ranValues = Math.floor(Math.random() * Math.floor(12))
    console.log({suits: suits[ranSuit], values: values[ranValues]})
    return {suits: suits[ranSuit], values: values[ranValues]}
}

document.getElementById("card1Button").addEventListener("click", e => {
    let randomCard = getRandomSuit(suits, values)
    console.log(randomCard.suits)
    dispatch({type: "CHANGE_CARD_ONE", suits: randomCard.suits, values: randomCard.values})

});

document.getElementById("card2Button").addEventListener("click", e => {
    let randomCard = getRandomSuit(suits, values)
    console.log(randomCard.suits)

    dispatch({type: "CHANGE_CARD_TWO", suits: randomCard.suits, values: randomCard.values})
});
