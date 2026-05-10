import { createContext } from 'react'

export const data = createContext()

function UserContext({ children }) {
  let username = "shekh khwaja julaha"

  return (
    <data.Provider value={username}>
      {children}
    </data.Provider>
  )
}

export default UserContext