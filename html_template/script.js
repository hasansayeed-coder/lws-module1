// select dom elements
const counterEl = document.getElementById('counter');
// console.log(counterEl);
const incrementEl = document.getElementById('increment') ;
const decrementEl = document.getElementById('decrement') ;

// action Identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement" ;

// initial state

const initialState = {
    value : 0 , 
}


//action creators

const increment = (value) => {
    return {
        type : INCREMENT , 
        payload : value ,
    }
}
const decrement = (value) => {
    return {
        type : DECREMENT , 
        payload : value,
    }
}

// create a reducer function
function counterReducer(state = initialState , action){

    if(action.type === INCREMENT){
        return {
            ...state ,
            value : state.value + action.payload , 
        }
    }

    else if(action.type === DECREMENT){
        return {
            ...state , 
            value : state.value - action.payload , 
        }
    }

    else{
        return state ;
    }
}



// create store
const store = Redux.createStore(counterReducer) ;

// change the UI
const render = () => {
    const state = store.getState() ;
    counterEl.innerText = state.value.toString()
}

// to update the count to 0 first time initialized
render() ;

//subscribing
store.subscribe(render)

// button click listenner
incrementEl.addEventListener('click' , () => {
    store.dispatch(increment(2))
})

decrementEl.addEventListener('click' , () => {
    store.dispatch(decrement(1))
}) 