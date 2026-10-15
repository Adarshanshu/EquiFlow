import React from 'react'

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
})

export function GeneralContextProvider({ children }) {
  return <GeneralContext.Provider value={{ openBuyWindow: () => {}, closeBuyWindow: () => {} }}>{children}</GeneralContext.Provider>
}

export default GeneralContext
