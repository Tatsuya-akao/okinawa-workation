import React from "react"
import { useContext, useState, useEffect, useCallback } from "react"
import { css } from "@emotion/react"
import WeatherList from "./WeatherList"
import Title from "./Title"
import { mq } from "../styles/mq"
import { GatsbyContext } from "../context/Context"

const Weather = () => {
  const { loadingIsDone } = useContext(GatsbyContext) || {
    loadingIsDone: null,
  }

  const [data, setData] = useState([])
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=26.3094&lon=127.7703&appid=393f2a047122f1edb82f420093e02096&units=metric`

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      const { daily } = data
      const newData = daily

      setData(newData)
      setTimeout(() => {
        loadingIsDone()
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div css={weatherStyle}>
      <Title headLevel="2" titleType="flower">
        天気予報
      </Title>
      <WeatherList data={data} />
    </div>
  )
}

const weatherStyle = css`
  margin-top: 6rem;
  ${mq("tab")} {
    margin-top: 6%;
  }
`

export default Weather
