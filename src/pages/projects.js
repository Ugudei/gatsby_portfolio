import React from "react"
import Layout from "../components/layout"

export default function Projects() {
  return (
    <Layout>
      <h1> Echo Sales </h1>
      <p>
      + Dynamic components, Node Server, SQL database, Jest testing 
      + Worked on micro services of item detail page, and built the dynamic components
      + Agile Development
      + Deployed each of the micro services to AWS EC2 instance and built the combined proxy server
      </p>
      <h1> Car Carousel </h1>
      <p>
      + Inherited legacy code with Redux, modified API calls
      + Tested non-relational and relational database for efficiency using Artillery and New Relic, changed the existing database to MariaDB
      + Generated 10 million records
      + Using Docker, pushed containerized image to ECR, deployed to AWS and RWS
      </p>
    </Layout>)
}