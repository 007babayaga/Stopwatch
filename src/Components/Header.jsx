import { useEffect, useState } from "react";
import { GiStopwatch } from "react-icons/gi";


const Header = ()=>{
    const[timeInSec,setTimeInSec] =useState(0);
    const[lap,setLap] = useState([]);
    const[toggle,setToggle] =useState(true);

    useEffect(()=>{
        let id;
        if(toggle){
        id = setInterval(() => {
        console.log(timeInSec);
        setTimeInSec((prev)=>prev+1);
    }, 1000);
}
    return (()=>{
        clearInterval(id);
    })
    },[toggle,timeInSec])

    
    const sec = timeInSec%60;
    const min = Math.floor(timeInSec/60) % 60;
    const hours = Math.floor(timeInSec/3600)

    const uniformSeconds = sec.toString().padStart(2,"0");
    const uniformMin = min.toString().padStart(2,"0");
    const uniformHours = hours.toString().padStart(2,"0");

        //mein yha pe seconds ko phirse reset kr dunga
    const HandleReset =()=>{
        setTimeInSec(0);
    }

    const HandleStop = ()=>{
        setToggle((prev)=>{
            return !prev;
        })
    }
    const HandleStart =()=>{
        setToggle((prev)=>{
            return !prev;
        })
    }
    const HandleLap =()=>{
        setLap((prev)=>{
            const temp = [...prev]
            temp.push(`${uniformHours}:${uniformMin}:${uniformSeconds}`)
            return temp;
        })
    }

    return (
        <>
        <div className="bg-blue-500 p-7  flex justify-center">
            <h1 className="text-black text-4xl ">Stopwatch</h1>
        </div>
        <div className="flex justify-center pt-4">
        <GiStopwatch className="text-9xl text-green-300 "/>
        </div>
        <div className="flex flex-row justify-center pt-9">
            {
                <h1 className="text-6xl">{uniformHours}:{uniformMin}:{uniformSeconds}</h1>
            }
        </div>
        <div className="flex flex-row justify-center gap-3 pt-7">
            {
                toggle ? ( <button onClick={HandleStop}  className="bg-red-700 text-white rounded-2xl h-10  w-40 ">Stop</button>) :(<button onClick={HandleStart}  className="bg-green-700 text-white rounded-2xl h-10  w-40 ">Start</button>)
            }
        <button onClick={HandleReset} className="bg-cyan-500 text-white rounded-2xl  w-40">Reset</button>
        <button onClick={HandleLap}className="bg-teal-700 text-white rounded-2xl w-40">Lap</button>
        </div>
        <div>
            <div className="flex flex-col justify-center items-center pt-8 text-2xl text-blue-700 m-7">
                {
                    lap.map((ele,idx)=>{
                        return(
                        <ul key={idx}>
                            <li>Lap : {ele}</li>
                        </ul>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export {Header};