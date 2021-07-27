import React from "react"
import { css } from "@emotion/react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Weather from "../components/Weather"
import Helmet from "react-helmet"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>沖縄ワーケーション2021</title>
        <meta name="description" content="沖縄ワーケーション2021　8/12~8/19" />
        <html lang="ja" />
      </Helmet>
      <Layout>
        <Hero />
        {/* <div css={abc}><Weather /></div> */}
      </Layout>
    </>
  )
}

const abc = css`
  height: 50vh;
  width: 100%;
  background-color: #f6de90;
  /* background-color: #fff; */
`
