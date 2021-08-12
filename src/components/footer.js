import React from "react"

import "./footer.css"


const Footer = () => (

    <footer>
        <div className="footer-contain">
            <div className="footer-left">
                <h5 className="label">AN INVESTIGATIVE JOURNALISM COLLABORATION</h5>
                <div className="footerOutlets">
                    <a href="https://www.bettergov.org/" target="_blank"> 
                        <img title="Better Government Association" alt="Better Government Association" src={require('../images/BGA.png')}/>
                    </a>
                    <a href="https://www.injusticewatch.org/" target="_blank"> 
                        <img title="Injustice Watch" alt="Injustice Watch" src={require('../images/IW.png')}/>
                    </a>
                    <a href="https://datamade.us/" target="_blank"> 
                        <img title="Datamade" alt="Datamade" src={require('../images/DM.png')}/>
                    </a>
                </div>
                <p>Copyright 2021</p>
            </div>
            <div className="footer-right">
                <img alt="The Circuit logo" src={require('../images/circuit_block.png')} />
            </div>
        </div>
    </footer>
)

export default Footer
