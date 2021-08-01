import React from "react"
import { css } from "@emotion/react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Accommodation from "../components/Accommodation"
import Helmet from "react-helmet"
import Loading from "../components/Loading"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>沖縄ワーケーション2021</title>
        <meta name="description" content="沖縄ワーケーション2021　8/12~8/19" />
        <html lang="ja" />
      </Helmet>
      <Loading />
      <Layout>
        <Hero />
        <Accommodation />
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
