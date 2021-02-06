import React from "react"
import Layout from "../components/layout"
import gif from "../styles/adventure.gif"
import gif1 from "../styles/coding.gif"
export default function About() {
  return (
    <Layout>
      <h1>About me</h1>
      <p>
      A Software Engineer looking to challenge and hone my skills in full time development position. 
      <dd> I always loved reading and learning new things to self improve. That is why I'm interested in coding, there are always new technologies and tools to learn. </dd>
      <img src={gif1}/>
      <dd>All of them come with their challenge, and makes you think inside/outside the box everyday. </dd>
      <img src={gif}/>
      <dd>Besides trying to solve problems through coding, I enjoy hiking, singing, playing video games and watching movies with my friends and family. </dd>
      </p>
    </Layout>
  )
}