import React, {useContext, useReducer} from 'react'

/* 
 useContext: 就是class 中的context
*/

const reducer = (state = 0, {type}) => {
    switch (type) {
        case "add":
            return state + 1
        case 'sub':
            return state - 1
        default:
            return state;
    }
}
const Context = React.createContext(null);

const Child = () => {
    const [count, dispatch] = useContext(Context)
    return (
        <div>
            <div>child...{count}</div>
            <button onClick={() => dispatch({type: 'add'})}>child add</button>
            <button onClick={() => dispatch({type: 'sub'})}>child sub</button>
        </div>

    )
}

const UseContext = () => {
    const [count, dispatch] = useReducer(reducer, 10)
    return (
        <Context.Provider value={[count, dispatch]}>
            <div>
                <div>mom ... {count}</div>
                <Child/>
                <button onClick={() => dispatch({type: 'add'})}>mom add</button>
                <button onClick={() => dispatch({type: 'sub'})}>mom sub</button>
            </div>
        </Context.Provider>
    )
}

export default UseContext
