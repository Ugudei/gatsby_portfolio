import React from "react"
import Layout from "../components/layout"
import "../styles/global.css"
import avatar from "../styles/circle-cropped.png"
import { Link } from "gatsby"

export default function Home() {
    return ( 
    <Layout>
      
        <h3> Hello, I am </h3>
        <h1> Uguudei Tumurbaatar.</h1>
        <h3> Software engineer. </h3>
        
        <img src={avatar} alt="avatar" width="400" height="400">
        </img>

      
    </Layout>
      
    )
}
