import React, { useState } from "react"

const GatsbyContext = React.createContext()

const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isCountdown, setIsCountdown] = useState(true)

  const loadingIsDone = () => {
    setIsLoading(false)
  }

  const countdownIsDone = () => {
    setIsCountdown(false)
  }

  return (
    <GatsbyContext.Provider
      value={{ isLoading, loadingIsDone, isCountdown, countdownIsDone }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, ContextProvider }
