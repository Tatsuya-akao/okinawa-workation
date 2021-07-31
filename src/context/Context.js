import React, { useState } from "react"

const GatsbyContext = React.createContext()

const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  const loadingIsDone = () => {
    setIsLoading(false)
  }

  return (
    <GatsbyContext.Provider value={{ isLoading, loadingIsDone }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, ContextProvider }
