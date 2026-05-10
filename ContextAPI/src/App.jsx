import React, { use, useContext } from 'react'
import { data } from './context/UserContext'
import { value } from './context/Story'
function App() {
 let name=useContext(data)
 let user=useContext(value)
  console.log(name);
  console.log(user);
  
  return (
    <div>
      <h1>{name}</h1>
      <h1>{user}</h1>
    </div>
  )
}

export default App