const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    let nextState = [...state]
    const { type } = action;
    switch(type){
        case 'ADD_NAME':
            nextState.push(action.name)
            return nextState
        default:
            return nextState
    }
    // Add a Name Tag

}