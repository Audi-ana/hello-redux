const redux = require('redux')

const initialState = {
    counter: 100
}

//create a reducer -> actually executes the update/action
let rootReducer = (state = initialState, action) =>{
    if(action.type == "DEC_COUNTER"){
        return{
            ...state, 
            counter: state.counter - 1
        }
    }
    else if(action.type == "SUB_COUNTER") {
    return {
        ...state,
        counter: state.counter - action.value
        }
    }
    return state 
}

// //create a store
const store = redux.createStore(rootReducer)

//Subscribe -> a listener
store.subscribe(() => {
    console.log("[Subscribed]",store.getState())
  })

console.log(store.getState())
//dispatching actions -> triggers a state change
console.log("Dispatching DEC_COUNTER action")


store.dispatch({
    type:"SUB_COUNTER",
    value: 12
})

store.dispatch({
    type: 'DEC_COUNTER'
})

console.log(store.getState())