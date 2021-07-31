import React from "react"
import { css } from "@emotion/react"
import WeatherItem from "./WeatherItem"
import { mq } from "../styles/mq"

const WeatherList = ({ data }) => {
  return (
    <>
      <ul css={weatherListStyle}>
        {data.map((day, index) => {
          // get data
          const { dt } = day
          const { icon, main } = day.weather[0]
          const { max, min } = day.temp

          // format data
          const date = new Date(dt * 1000)

          return (
            <WeatherItem
              key={index}
              dt={dt}
              icon={icon}
              main={main}
              min={min}
              max={max}
            />
          )
        })}
      </ul>
    </>
  )
}

const weatherListStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  max-width: 68rem;
  margin: 3.4rem auto 0;

  ${mq("tab")} {
    margin-top: 8%;
  }
`

export default WeatherList
