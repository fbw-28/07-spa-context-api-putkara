import React, {useContext}from'react';
import {MyContxt} from "../App"

export default function C(){
    const {x,y,setY} = useContext(MyContxt)
    return(
        <div>
            <h1>C, Y={y}<button onClick={()=>setY(x+1)}>incriment Y</button></h1>
        </div>
    )
}