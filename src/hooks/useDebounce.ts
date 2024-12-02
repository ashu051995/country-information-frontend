import { useEffect,useRef,useState } from "react";


const useDebounce = (value:string,delay?:number)=>{
    const [debauncedValue,setDebouncedValue] = useState<string>('')
    const delayTime = delay|| 200
    const timerRef = useRef<number>();
    useEffect(()=>{
        timerRef.current = setTimeout(()=>setDebouncedValue(value),delayTime)
        return ()=>{
            clearTimeout(timerRef.current)
        }
    },[value,delay])

    return debauncedValue;
}

export default useDebounce;