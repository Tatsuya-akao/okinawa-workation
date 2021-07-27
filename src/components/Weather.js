import React from "react"
import { useState, useEffect, useCallback } from "react"
import { css } from "@emotion/react"
import WeatherList from "./WeatherList"
import Title from "./Title"
import { mq } from "../styles/mq"
import { translateWeather } from "../functions/translateWeather"

const Weather = () => {
  const [data, setData] = useState([])
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=26.3094&lon=127.7703&appid=393f2a047122f1edb82f420093e02096&units=metric`
  // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=31.2504&lon=-99.2506&appid=393f2a047122f1edb82f420093e02096&units=metric`

  // [26.3094, 127.7703]
  //  [-33.8679, 151.2073]
  // [31.2504, -99.2506]

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      const { daily } = data

      const newData = daily

      setData(newData)
    } catch (error) {
      console.log(error)
    }
  }, [url])

  console.log(data)

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div css={weatherStyle}>
      <Title headLevel="2" titleText="天気予報" titleType="flower" />
      <WeatherList data={data} />
    </div>
  )
}

const weatherStyle = css`
  margin-top: 6rem;
  ${mq('tab')} {
    margin-top: 6%;
  }
`

export default Weather
