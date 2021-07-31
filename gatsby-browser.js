import React from "react"
import "normalize.css"
import "./src/styles/global.css"

import { ContextProvider } from "./src/context/Context"

export const wrapRootElement = ({ element }) => {
  return <ContextProvider>{element}</ContextProvider>
}
