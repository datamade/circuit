import { Link } from "gatsby"
import React from "react"

import "./styles.css"


const HeaderEN = ({ siteTitle }) => (
  <header className="header">
    <a href="/" class="nav-icon">
      <img alt="The Circuit logo" src={require('../images/circuit_block.png')} />
    </a>
  <input type="checkbox" className="menu-btn" id="menu-btn"/>
  <label className="menu-icon" for="menu-btn">    
  <span className="navicon"></span>
  </label>
  <ul className="menu">
    <li><a href="https://charges.thecircuit.cc/">Explore the data</a></li>
    <li><a href="/about_en">About</a></li>
    <li><a href='/connect'>Connect</a></li>
    <li><a href="/">English</a> / <a href="/index_es">Español</a></li>
  </ul>
  {/* <img className="" src={require('../images/circuit_block.png')} /> */}
</header>
)


export default HeaderEN
