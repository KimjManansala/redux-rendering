const initialState = [
    {
        radius: 50,
        colors: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    let nextState = [...state]
    const { type } = action;
    switch (type){
        case "ADD_CIRCLE":
            nextState.push({radius: action.radius, color: action.color})

        default:
            return nextState
    }
    // ACTION: Add a random circle

}