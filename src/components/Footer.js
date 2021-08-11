import React from "react"
import { css } from "@emotion/react"

const Footer = () => {
  return (
    <footer css={footer}>
      <p>
        Developed by
        <a
          href="https://twitter.com/a_tatsu1512"
          target="_blank"
          rel="noopener noreferrer"
        >
          @a_tatsu1512
        </a>
      </p>
    </footer>
  )
}

const footer = css`
  background-color: #f6de90;
  color: #7b5f07;

  p {
    padding: 1rem 0 2rem;
    font-size: 1.4rem;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
  }

  a {
    margin-left: 0.6rem;
    text-decoration: none;
    color: inherit;
    background-image: linear-gradient(90deg, #7b5f07 0, #7b5f07 100%);
    background-size: 0 1px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: all 0.3s;

    &:hover {
      background-size: 100% 1px;
      opacity: 0.8;
    }
  }
`

export default Footer
