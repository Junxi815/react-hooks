import {useState, useEffect} from 'react';

/* 
useEffect 的出现 ： 在函数组件里面使用class的生命周期函数，是所有周期函数的合体！
                    在useEffect改变setCount是有效的，如果后面的参数是空数组的话，只第一次改变有效，
                    如果数组的参数是含有该state的话，改变一直是有效的
*/

const UseEffect = () => {
    const [name, setName] = useState("Jackie");
    const [age, setAge] = useState(12);
    const [count, setCount] = useState(0);

    /******* 使用场景 *******/ 
    //1. 相当于componentDidMount，替代didMount，第一次渲染时，可以用来请求异步数据...
            //useEffect最后，加了[]就表示只第一次执行
    useEffect(()=>{
        setName("Micheal");
    },[]);
     
    //2. 相当于componentWillUpdate, 替代willUpdate，等每次渲染都会执行的生命函数
            //useEffect最后，不加[]就表示每一次渲染都执行
    useEffect(()=>{
        setName("Fancy");
    });

    //3. 数据有更新时才执行
             //useEffect最后，加[]，[]中的字段表示，这个字段更改，effect才执行
    useEffect(() => {
        setName("Nathan");
    },[name]);

    //4. 数据分布有更新时，才想各自执行，须分开写
    useEffect(() => {
        setName("Susan");
    },[name]);
    
    useEffect(() => {
        setAge(16);
    },[age]);
 
    //5. 相当于willUnMount，生命周期里面的订阅，后来需要取消订阅
            //在effect的return里，可以做取消订阅
    useEffect(() => {
        const timer = setInterval(()=>{
            setAge = (age+1);
        },10000);
        return () => {
            clearInterval(timer);
        }
    },[]);

    /******* Note *******/
    /* 1.  */
    useEffect(() => {
        console.log('use effect...',count)
        const timer = setInterval(() => {
            console.log('timer...count:', count)
            setCount(ts=>ts++)
        }, 1000)
        return ()=> clearInterval(timer)
    })
    /* 2. useEffect: React Hooks文档明确说明，要在组件的顶层调用，而且不要有条件的执行hook,
                     因为要求所有的hooks必须在每一次渲染按照相同的顺序执行才行。
                     文档原文：
                    Only Call Hooks at the Top Level
                    Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks
                    at the top level of your React function. By following this rule, you ensure that Hooks 
                    are called in the same order each time a component renders. That’s what allows React to 
                    correctly preserve the state of Hooks between multiple useState and useEffect calls. 
                    (If you’re curious, we’ll explain this in depth below.)  */    
   
    if(2 < 5){
        useEffect(() => {
             console.log('use effect...',count)
             const timer = setInterval(() => setCount(count +1), 1000)
             return ()=> clearInterval(timer)
         }) 
     } 
  
    //3. useEffect不能被打断，如return语句。具体原因和useEffect的生成执行规则有关系，见文档。

    return(
        <>
            <div>
                {name}
            </div>
            <div>
                {age}
            </div>
            <div>
                {count}
            </div>
        </>
    )

}

export default UseEffect;