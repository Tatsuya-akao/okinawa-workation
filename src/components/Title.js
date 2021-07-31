import React from "react"
import { css } from "@emotion/react"
import { mq } from "../styles/mq"
import { font, color } from "../styles/variables"
import FlowerImg from "../img/flower.svg"

const Title = ({ headLevel, titleType, children }) => {
  const TitleEl = `h${headLevel}`

  return (
    <TitleEl css={[titleType === "flower" ? titleFlower : titleDefaultStyle]}>
      {children}
    </TitleEl>
  )
}

const titleFlower = css`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${font.mukashi};
  color: ${color.white};
  font-size: 6rem;

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

const titleDefaultStyle = css``

export default Title
