import {useEffect, useState} from "react";

/* 
* 自定义Hook
* 自定义一个当resize 的时候 监听window的width和height的hook
* 使用：  const [width, height] = useWindowSize()
*/

export const useWindowSize = () => {
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()

    useEffect(() => {
        const {clientWidth, clientHeight} = document.documentElement
        setWidth(clientWidth)
        setHeight(clientHeight)
    }, [])

    useEffect(() => {
        const handleWindowSize = () =>{
            const {clientWidth, clientHeight} = document.documentElement
            setWidth(clientWidth)
            setHeight(clientHeight)
        };

        window.addEventListener('resize', handleWindowSize, false)

        return () => {
            window.removeEventListener('resize',handleWindowSize, false)
        }
    })

    return [width, height]
}

