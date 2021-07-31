import React, { useContext } from "react"
import { css, keyframes } from "@emotion/react"
import { GatsbyContext } from "../context/Context"
import { mq } from "../styles/mq"

const Loading = () => {
  const { isLoading } = useContext(GatsbyContext) || {
    isLoading: true,
  }

  return (
    <div css={[isLoading ? loadingStyle : [loadingStyle, loadingDone]]}>
      <p css={loadingText}>
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </p>
    </div>
  )
}

const loadingStyle = css`
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

const fadeText = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(-20px);
  }

  50%{
    transform: translateY(0);
  }
`

const loadingText = css`
  font-size: 6rem;
  font-weight: bold;
  font-family: "Roboto";
  letter-spacing: 0.06em;
  color: #48d7fb;
  color: #079ad3;
  animation: ${fadeText} 1s;

  ${mq("tab")} {
    font-size: 4rem;
  }

  span {
    animation: ${bounce} 1.6s infinite ease-in-out;
    display: inline-block;

    &:nth-of-type(2) {
      animation-delay: 0.1s;
      color: #21bbe1;
    }

    &:nth-of-type(3) {
      animation-delay: 0.2s;
      color: #48d7fb;
    }

    &:nth-of-type(4) {
      animation-delay: 0.3s;
    }

    &:nth-of-type(5) {
      animation-delay: 0.4s;
      color: #21bbe1;
    }

    &:nth-of-type(6) {
      animation-delay: 0.5s;
      color: #48d7fb;
    }

    &:nth-of-type(7) {
      animation-delay: 0.6s;
    }

    &:nth-of-type(8) {
      animation-delay: 0.7s;
      color: #21bbe1;
    }

    &:nth-of-type(9) {
      animation-delay: 0.8s;
      color: #48d7fb;
    }

    &:nth-of-type(10) {
      animation-delay: 0.9s;
    }
  }
`

const hideLoading = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
`

const loadingDone = css`
  animation: ${hideLoading} 1s forwards;
`

export default Loading
