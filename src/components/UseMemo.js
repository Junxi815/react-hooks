import {useState, useEffect, useMemo} from 'react';

/*
useMeno 的作用： 解决值的缓存问题。 有着暂存能力，暂存了上一次的结果。
首先当前传值与上一次的值进行对比，若值未改变，那么不重新赋值成新对象
没有新的对象，就没有新的内存地址，那么不会重新render。
    首先对比data的值，若没有改变不重新render.
        const data = useMemo(()=>{
            return {
                name
            }
        },[name])

/********* 知识点 ********
 * 😄 1. 首先，memo 的用法：函数组件里面的PureComponent。
               但是，如果函数组件被 React.memo 包裹，且其实现中拥有 useState 或 useContext 的 Hook，
               当 context 发生变化时，它仍会重新渲染。
 * 😄 2. 而且，memo是浅比较，意思是，对象只比较内存地址，只要内存地址没变，管对象里面的值千变万化都不会触发render
 * 😄 3. 最后，useMemo 的作用是， 于是useMemo 作为一个有着暂存能力的，出现了。      
*/

const Child = memo(({data}) =>{
    console.log('child render...', data.name)
    return (
        <div>
            <div>child</div>
            <div>{data.name}</div>
        </div>
    );
})

const UseMemo =()=>{
    console.log('Hook render...')
    const [count, setCount] = useState(0)
    const [name, setName] = useState('rose')

   const data = useMemo(()=>{
        return {
            name
        }
    },[name])
    
    return(
        <div>
            <div>
                {count}
            </div>
            <button onClick={()=>setCount(count+1)}>update count </button>
            <Child data={data}/>
        </div>
    )
}

/*******useMemo出现的原因*******/
/* 当点击按钮更新count的时候，Effect组件会render，一旦render， 执行到这一行代码：
const data = { name }
这一行代码会生成有新的内存地址的对象，那么就算带着memo的Child组件，也会跟着重新render， 尽管最后其实Child使用到的值没有改变！ */
/* const Child = memo(({data}) =>{
    console.log('child render...', data.name)
    return (
        <div>
            <div>child</div>
            <div>{data.name}</div>
        </div>
    );
})
const Hook =()=>{
    console.log('Hook render...')
    const [count, setCount] = useState(0)
    const [name, setName] = useState('rose')

    const data = {
        name
    }

    return(
        <div>
            <div>
                {count}
            </div>
            <button onClick={()=>setCount(count+1)}>update count </button>
            <Child data={data}/>
        </div>
    )
} */