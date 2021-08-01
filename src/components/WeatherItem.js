import React from "react"
import { css } from "@emotion/react"
import { font, color } from "../styles/variables"
import { formatTemp, averageTemp } from "../functions/formatTemperture"
import { mq } from "../styles/mq"
import WeatherIcon from "./WeatherIcon"

const WeatherItem = ({ dt, icon, main, min, max }) => {
  const dateData = new Date(dt * 1000)
  const month = dateData.getMonth() + 1
  const date = dateData.getDate()

  return (
    <li css={weatherItem}>
      <span css={weatherDate}>
        {month}/{date}
      </span>
      <div css={weatherImg}>
        {/* <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={main}
        /> */}
        <WeatherIcon main={main} />
      </div>
      <div css={temp}>
        <span className="temp-row temp-pc">
          <span className="temp-head">MIN:</span>
          <strong>{formatTemp(min)}</strong>&#8451;
        </span>
        <span className="temp-row temp-pc">
          <span className="temp-head">MAX:</span>
          <strong>{formatTemp(max)}</strong>&#8451;
        </span>
        <span className="temp-row temp-sp">
          <strong>{averageTemp(min, max)}</strong>&#8451;
        </span>
      </div>
    </li>
  )
}

const weatherItem = css`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem 0;
  width: 15rem;
  padding: 1.6rem 0 1.6rem;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: #333;
  font-family: ${font.roboto};

  ${mq("pc")} {
    width: 12rem;
  }

  ${mq("tab")} {
    width: 20%;
    margin: 2vw;
    padding: 2% 0 2%;
    backdrop-filter: blur(6px);
  }
`

const weatherDate = css`
  position: absolute;
  left: 1rem;
  top: 1rem;
  color: ${color.white};
  font-weight: bold;
  font-size: 1.4rem;

  ${mq("tab")} {
    position: static;
    font-size: 3vw;
  }
`

const weatherImg = css`
  height: 10rem;
  padding: 1.2rem;

  ${mq("pc")} {
    height: 8rem;
  }

  ${mq("tab")} {
    height: 14vw;
    padding: 0;
  }

  img {
    height: 100%;
    width: auto;
  }
`

const temp = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 1rem;
  margin-top: -1rem;
  font-weight: bold;

  .temp-row {
    color: ${color.white};
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    letter-spacing: 0.1em;
    width: 100%;
    margin: 0.6rem 0 0;

    ${mq("tab")} {
      font-size: 3vw;
      letter-spacing: 0;
    }
  }

  .temp-pc {
    ${mq("tab")} {
      display: none;
    }
  }

  .temp-sp {
    display: none;

    ${mq("tab")} {
      display: flex;
    }
  }

  .temp-head {
    ${mq("tab")} {
      display: none;
    }
  }

  strong {
    margin-left: 0.4rem;
  }
`

export default WeatherItem
