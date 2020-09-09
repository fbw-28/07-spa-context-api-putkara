import React, {useContext}from'react';
import {MyContxt} from "../App"

export default function B(){
    const {x,y,setX} = useContext(MyContxt)
    return(
        <div>
            <h1>B, X={x}<button onClick={()=>setX(y+1)}>incriment X</button></h1>
        </div>
    )
}