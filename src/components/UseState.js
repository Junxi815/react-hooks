import React, { useState, memo, useEffect } from "react";

/* 
*useState的初始值，只在第一次有效
*       useSate只初始化一次的原因大概是，在第二次updateReducer的时候，调用updateWorkInProgressHook获取的
*       pending以及baseQueue为null，导致拿的还是之前hook上的memoizedState
*
*/
        //如果state是对象只更改一个属性的值要用到Object.assign ，不然会覆盖对象
/* 
memo:->React.memo,作用主要是用于缓存组件，使得组件可以按照业务的需求决定是否来更新的效果，
比如业务场景中常见的一个场景，在页面的底部有一个版权说明，一般这是各个模块页面所公用的一个
组件，但这个组件基本就是一个静态的文案描述，如果父组件数据变化更新的时候这个抽象出来的版权
组件也无需更新，这样可以达到减少页面性能开销的目的。
*/

//下方代码可替换，可获取name的值
/* 
const Child = ({data}) =>{
    const [name, setName] = useState(data)
    useEffect(() => {
        setName(data)
    }, [data])
    return (
        {name}
    );
}
export default () => {
    const [name, setName] = useState('rose');
    return (    
        setName('jack')   //update name 
    );
} 
*/
export const MemoChild = memo(({data}) =>{
    console.log('child render...', data)
    const [name, setName] = useState(data)
    return (
        <div>
            <div>child</div>
            <div>{name} --- {data}</div>
        </div>
    );
})
export const UseState =()=>{
    console.log('Hook render...')
    const [count, setCount] = useState(0)
    const [name, setName] = useState('rose')
    return(
        <div>
            <div>
                {count}
            </div>
            <button onClick={()=>setCount(count+1)}>update count </button>
            <button onClick={()=>setName('jack')}>update name </button>
            <MemoChild data={name}/>
        </div>
    )
}

