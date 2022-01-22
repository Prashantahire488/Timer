import { useEffect,useState } from "react"
export const Timer = () =>
{
    const [counter, setCounter] = useState(0)
    const [status, setStatus] = useState(true)

    useEffect( () => 
    {
     const id = setInterval( () =>
        {               
            setCounter((c) => c+1 ); 
        },1000)
    },[])

    const STOP = () =>
    {
        setStatus(false)
        console.log("STOP");
    }
    
    const START = () =>
    {
        setCounter(1)
        console.log("START")
    }
    const RESET = () =>
    {
        console.log("RESET")
        setCounter(0);
    }

    console.log(status)
   
    return (
        <div className="d1">
            <h1>Counter : {counter} </h1>
            <br />
            <button onClick={START}>START</button>
            {"  "}
            <button onClick={STOP}>STOP</button>
            {"  "}
            <button onClick={RESET}>RESET</button>
            
        </div>
    )
}