import React from "react"
import Layout from "../components/layout"
import gif from "../styles/echoSales.gif"
import { Link } from "gatsby"

export default function Projects() {
  return (
    <Layout>
      <h1> <a href="https://github.com/FEC-ghrden02/landing-page">Echo Sales</a> </h1>
      <img src={gif}></img>
      <p>
      <dd> Dynamic components, Node Server, SQL database, Jest testing </dd>
      <dd> Worked on micro services of item detail page, and built the dynamic components </dd>
      <dd> Agile Development </dd>
      <dd> Deployed each of the micro services to AWS EC2 instance and built the combined proxy server </dd>
    
      </p>
      
      <h1> <a href="https://github.com/SDC-den02/car-carousel"> Car Carousel </a> </h1>
      <p>
      <dd> Tested non-relational and relational database for efficiency using Artillery and New Relic, changed the existing database to MariaDB </dd>
      <dd> Generated 10 million records </dd>
      <dd> Inherited legacy code with Redux, modified API calls </dd>
      <dd> Using Docker, pushed containerized image to ECR, deployed to AWS and RWS </dd>
      </p>
    </Layout>)
}