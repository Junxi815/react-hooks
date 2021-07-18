import {useState, useEffect,useRef} from 'react';

/* 
useRef 作用：ⅠuseRef.current的值传给setCount的方法，引发更新... （不是很准确）
            useRef更多的用于保存不影响状态又需要存储的值，可以理解为类组件中的实例属性。
             Ⅱ 可以操作dom
*/

//1.  将useRef.current的值,传给setCount的方法, 会引发更新。
export const UseRefGlobal = () => {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)

    useEffect(() => {
        console.log('use effect...',count)
        const timer = setInterval(() => {
           console.log('timer...count:', countRef.current)
            setCount(++countRef.current)
        }, 1000)
        return ()=> clearInterval(timer)
    },[])

    return(
        <>
        {count}
        </>
    )
}

// 2.  普遍操作，用来操作dom
export const UseRefDom =()=>{
    const [count, setCount] = useState(0)
    const btnRef = useRef(null)

    useEffect(() => {
        console.log('use effect...')
        const onClick = ()=>{
            setCount(count+1)
        }
        btnRef.current.addEventListener('click',onClick, false)
        return ()=> btnRef.current.removeEventListener('click',onClick, false) 
    },[count])

    return(
        <div>
            <div>
                {count}
            </div>
            <button ref={btnRef}>click me </button>
        </div>
    )
}
