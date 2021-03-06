import React from "react"
import Layout from "../components/layout"
import contact from "../styles/contact.png"
import mail from "../styles/gmail.png"
import linkedin from "../styles/linkedin.png"
import github from "../styles/github.png"


export default function Contact() {
  return (
    <Layout>
      <img src={contact} />
      <h1>I'd love to talk about anything!</h1>
      <p>
      <i class="fab fa-linkedin-in"></i>
      <a href="mailto:ugudeit@gmail.com"><h2>ugudeit@gmail.com </h2> </a>
      </p>
      <p><a href="https://www.linkedin.com/in/ugudeit/"><h2> LinkedIn </h2></a> </p>
      <p><a href="https://www.github.com/ugudei/"><h2> Git Hub </h2></a> </p>

  
    </Layout>
  )
}