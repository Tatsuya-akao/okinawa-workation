import React from "react"
import { css } from "@emotion/react"
import { mq } from "../styles/mq"
import Title from "./Title"
import Slider from "./Slider"
import airBnbLogo from "../img/airbnb-logo.svg"

const Accommodation = () => {
  return (
    <section css={accommodation}>
      <Title headLevel="2" color="sand" titleType="flower">
        宿泊施設
      </Title>
      <Slider />
      <a
        css={btn}
        href="https://www.airbnb.jp/rooms/23191051?guests=1&adults=1&s=67&unique_share_id=a51164de-fafe-424c-8507-4579a78f6651"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={airBnbLogo} alt="" />
        Airbnbで見る
      </a>
    </section>
  )
}

const accommodation = css`
  background-color: #f6de90;
  padding: 10rem 0 20rem;

  ${mq("tab")} {
    padding: 15% 5% 25%;
  }
`

const btn = css`
  text-decoration: none;
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 5rem;
  margin: 4rem auto 0;
  background-color: #ff5c7a;
  box-shadow: 0 5px #d4314f;
  border-radius: 5px;
  transition: all 0.3s;

  ${mq("tab")} {
    font-size: 1.4rem;
    width: 16rem;
    height: 4rem;
    box-shadow: 0 4px #d4314f;
  }

  &:hover {
    box-shadow: none;
    transform: translateY(5px);
    background-color: #f54f6e;

    ${mq("tab")} {
      transform: translateY(4px);
    }
  }

  img {
    width: 1.8rem;
    margin-right: 0.6rem;
  }
`

export default Accommodation
