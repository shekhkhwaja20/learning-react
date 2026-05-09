import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
function App() {
let inputvalue= useRef("")
console.log(inputvalue);
// let [num,setNum]=useState(0)

// console.log(count);
//  useEffect(()=>{count.current=count.current+1})
// useEffect(()=>{
// setNum(++num)
// })
  return (
    <div> 
      <input type="text" ref={inputvalue} value="virtual code"/>
      {/* <h1>{count.current}</h1>
      <h1>{num}</h1>
      <button onClick={()=>setNum(++num)}>click</button> */}
  
    </div>
  )
}

export default App     