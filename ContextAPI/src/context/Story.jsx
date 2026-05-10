import { createContext } from 'react'

export const value = createContext()
function Story({ children }) {
 let user="anam mariya ansari"
  return (
    <div>
        <value.Provider value={user}>
              {children}
            </value.Provider>
    </div>
  )
}

export default Story