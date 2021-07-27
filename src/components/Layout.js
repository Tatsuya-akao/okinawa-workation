import React from "react"
import { css } from "@emotion/react"

const Layout = ({ children }) => {
  return <div css={layout}>{children}</div>
}

const layout = css`
  text-align: center;
  overflow: hidden;
`

export default Layout
