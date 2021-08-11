import React, { useState, useEffect, useContext } from "react"
import { css } from "@emotion/react"
import { font, color } from "../styles/variables"
import { GatsbyContext } from "../context/Context"
import { mq } from "../styles/mq"
import Title from "./Title"

const Countdown = () => {
  const { isCountdown, countdownIsDone } = useContext(GatsbyContext) || {
    isCountdown: true,
    countdownIsDone: null,
  }

  const startTime = new Date(`August 12 2021 00:00:00`)
  const currentTime = new Date()
  const [diff, setDiff] = useState(startTime - currentTime)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDiff(diff - 1000)
      setDays(Math.floor(diff / 1000 / 60 / 60 / 24))
      setHours(Math.floor(diff / 1000 / 60 / 60) % 24)
      setMinutes(Math.floor(diff / 1000 / 60) % 60)
      setSeconds(Math.floor(diff / 1000) % 60)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [seconds])

  useEffect(() => {
    const startTime = new Date(`August 12 2021 00:00:00`)
    const currentTime = new Date()
    if (startTime < currentTime) {
      countdownIsDone()
    }
  }, [])

  const formatTime = num => {
    if (num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }

  return (
    <div css={countdown}>
      {isCountdown ? (
        <Title headLevel="1" titleType="flower">
          沖縄ワーケーション
          <br />
          開始まで
        </Title>
      ) : (
        <Title headLevel="1" titleType="flower">
          沖縄ワーケーション
          <br />
          開始!!!
        </Title>
      )}

      {isCountdown ? (
        <ul css={time}>
          <li className="time-block">
            <span className="num">{formatTime(days)}</span>
            <span>Days</span>
          </li>
          <li className="time-block">
            <span className="num">{formatTime(hours)}</span>
            <span>Hours</span>
          </li>
          <li className="time-block">
            <span className="num">{formatTime(minutes)}</span>
            <span>Minutes</span>
          </li>
          <li className="time-block">
            <span className="num">{formatTime(seconds)}</span>
            <span>Seconds</span>
          </li>
        </ul>
      ) : (
        <p css={startText}>8/12 - 8/19</p>
      )}
    </div>
  )
}

const countdown = css`
  padding: 10rem 0;
  width: 100%;
  color: ${color.white};

  ${mq("tab")} {
    padding: 4rem 0 6rem;
  }
`

const time = css`
  font-family: ${font.roboto};
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  ${mq("pc")} {
    margin-top: 6rem;
  }

  ${mq("tab")} {
    margin-top: 8%;
  }

  .time-block {
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    width: 15rem;
    padding: 1.6rem 0 2.6rem;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-right-color: rgba(255, 255, 255, 0.2);
    border-bottom-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    color: #fff;

    ${mq("pc")} {
      width: 12rem;
    }

    ${mq("tab")} {
      width: 20%;
      margin: 2vw;
      padding: 2% 0 4%;
      backdrop-filter: blur(6px);
    }
  }

  .num {
    font-family: ${font.roboto};
    font-size: 7rem;
    font-weight: bold;

    ${mq("pc")} {
      font-size: 5.4rem;
    }

    ${mq("tab")} {
      font-size: 9vw;
    }
  }

  span {
    font-size: 2.4rem;
    font-family: "Josefin Sans";
    font-weight: 300;
    margin-top: 0.4rem;

    ${mq("pc")} {
      font-size: 2rem;
    }

    ${mq("tab")} {
      font-size: 3vw;
    }
  }
`

const startText = css`
  font-size: 3rem;
  font-family: ${font.roboto};
  font-weight: bold;
`

export default Countdown
