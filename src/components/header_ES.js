import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./styles.css"


const AboutHeaderES = ({ siteTitle }) => (
  <header className="header">
    <a href="/index_es" class="nav-icon">
      <img alt="The Circuit logo" src={require('../images/circuit_block.png')} />
    </a>
  <input type="checkbox" className="menu-btn" id="menu-btn"/>
  <label className="menu-icon" for="menu-btn">    
  <span className="navicon"></span>
  </label>
  <ul className="menu">
    <li><a href="https://charges.thecircuit.cc/es/">Explorar los datos</a></li>
    <li><a href="/about_es">Quienes Somos</a></li>
    <li><a href="/about_en">English</a> / <a href="/about_es">Español</a></li>

  </ul>
  {/* <img className="" src={require('../images/circuit_block.png')} /> */}
</header>
)


export default AboutHeaderES
