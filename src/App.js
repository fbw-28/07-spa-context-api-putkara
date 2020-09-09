import React, { createContext, useState } from 'react'
import B from './components/B';
import C from './components/C';




export const MyContxt=createContext(null)
function App(){
  const [x,setX]=useState(10);
  const [y,setY]=useState(13);
  return(
    <MyContxt.Provider value={{x,y,setX,setY}}>
    <div className="App">
     <B/>
     <C/>
     
    </div>
    </MyContxt.Provider>
  )
}
export default App;