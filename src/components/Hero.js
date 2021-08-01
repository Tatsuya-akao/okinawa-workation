import React from "react"
import { css } from "@emotion/react"
import Countdown from "./Countdown"
import Weather from "./Weather"
import HeroImg from "../img/hero-5.svg"
import { mq } from "../styles/mq"

const Hero = () => {
  return (
    <section css={hero}>
      <Countdown />
      <Weather />
    </section>
  )
}

const hero = css`
  width: 100%;
  min-height: 100vh;
  background-color: #48d7fb;
  background-image: url(${HeroImg});
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10% 0 20%;

  ${mq("tab")} {
    padding: 10vw 5% 20vw;
  }
`

export default Hero
