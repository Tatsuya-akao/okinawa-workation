import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import { rgba } from "emotion-rgba"
import { font, color } from "../styles/variables"
import FlowerImg from "../img/flower.svg"
import { mq } from "../styles/mq"
import { showPc } from "../styles/display"
import titleImg from "../img/hero-title.svg"
import titleImgSp from "../img/hero-title-sp.svg"

const Countdown = () => {
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

  const formatTime = num => {
    if (num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }

  return (
    <div css={countdown}>
      <h1 css={countTitle}>
        <img css={titleText} src={titleImg} alt="沖縄ワーケーション開始まで" />
        <img
          css={titleTextSp}
          src={titleImgSp}
          alt="沖縄ワーケーション開始まで"
        />
      </h1>
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
    </div>
  )
}

const countdown = css`
  padding: 10rem 0;
  /* color: #735858; */
  color: ${color.white};

  ${mq("tab")} {
    padding: 4rem 0 6rem;
  }
`

const countTitle = css`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mq("pc")} {
    padding: 0 10rem;
  }

  ${mq("tab")} {
    font-size: 9vw;
    padding: 0;
  }

  &::before,
  &::after {
    content: url(${FlowerImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 15rem;
    flex-shrink: 0;
    z-index: -1;

    ${mq("pc")} {
      position: absolute;
    }

    ${mq("tab")} {
      width: 18vw;
    }
  }

  &::before {
    transform: scale(-1, -1);
    margin-right: 2rem;

    ${mq("pc")} {
      left: -4rem;
      top: -7rem;
      transform: scale(-1, -1) rotate(-15deg);
    }

    ${mq("tab")} {
      left: 0;
      top: -54%;
    }
  }

  &::after {
    transform: scale(1, 1);
    margin-left: 2rem;

    ${mq("pc")} {
      right: -1rem;
      bottom: -2rem;
      transform: scale(1, 1) rotate(-15deg);
    }

    ${mq("tab")} {
      right: 4%;
      bottom: -10%;
    }
  }
`

const titleText = css`
  ${mq("pc")} {
    display: none;
  }
`

const titleTextSp = css`
  display: none;

  ${mq("pc")} {
    display: block;
  }

  ${mq("tab")} {
    width: 72%;
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
      width: 20vw;
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

export default Countdown
