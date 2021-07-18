import {useState,  useCallback} from 'react';

/* 
useMemo 的作用： 解决函数的缓存问题。
  const onChange = useCallback((e)=>{
        setText(e.target.value)
   },[])

/********知识点*********
 * 1.useMemo 与 useCallback 类似，都是有着缓存的作用。本质的区别可能就是：
 *                  useMemo 是缓存值的
 *                  useCallback 是缓存函数的
 * 2.没有依赖，添加空的依赖，就是空数组。
*/

const Child = memo(({data, onChange}) =>{
    console.log('child render...')
    return (
        <div>
            <div>child</div>
            <div>{data}</div>
            <input type="text" onChange={onChange}/>
        </div>
    );
})
const UseCallback = () =>{
    console.log('Hook render...')
    const [count, setCount] = useState(0)
    const [name, setName] = useState('rose')
    const [text, setText] = useState('')

    const onChange = useCallback((e)=>{
        setText(e.target.value)
   },[])

    return(
        <div>
            <div>count: {count}</div>
            <div>text : {text}</div>
            <button onClick={()=>setCount(count + 1)}>count + 1</button>
            <Child data={name} onChange={onChange}/>
        </div>
    )
}

/******useCallback 出现的原因*******/
/* 当点击count的按钮，Effect组件render，遇到了：
   const onChange=(e)=>{
        setText(e.target.value)
   }
则，重新生成了一个onChange函数，赋值给了Child组件，浅比较失败，Child组件成功重新render，尽管Child组件什么都没有做！ 
/*
const Child = memo(({data, onChange}) =>{
    console.log('child render...')
    return (
        <div>
            <div>child</div>
            <div>{data}</div>
            <input type="text" onChange={onChange}/>
        </div>
    );
})

const UseCallback =()=>{
    console.log('Hook render...')
    const [count, setCount] = useState(0)
    const [name, setName] = useState('rose')
    const [text, setText] = useState('')

   const onChange=(e)=>{
        setText(e.target.value)
   }
    
    return(
        <div>
            <div>count: {count}</div>
            <div>text : {text}</div>
            <button onClick={()=>setCount(count + 1)}>count + 1</button>
            <Child data={name} onChange={onChange}/>
        </div>
    )
}

*/

export {Child, UseCallback};