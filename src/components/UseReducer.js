import {useReducer} from 'react';

/* 
 useReducer: 顾名思义， 就是class 里面那个reducer。
*/

const reducer =(state = 0, {type})=>{
    switch (type) {
        case "add":
            return state+1
        case 'sub':
            return state-1
        default:
            return state;
    }
}
const UseReducer =()=>{
    const [count, dispatch] = useReducer(reducer, 0)
    return(
        <div>
           count:{count}
           <button onClick={()=> dispatch({type:'add'})}>add</button>
           <button onClick={()=> dispatch({type:'sub'})}>sub</button>
        </div>
    )
}

export default UseReducer
