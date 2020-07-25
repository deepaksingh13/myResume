import React from 'react'
import BackImage from '../../images/background.jpg'

const Personal = () => {
    return (
        <div className="main-section">
            <div className="backgound-image">
                <img src={BackImage} alt="back" className="img-responsive"/>
            </div>
            <div className="portfolio-img">
                <i class="fa fa-user"></i>
            </div>
            <div className="portfolio-content">
                <br/><br/>
                <h2 className="text-center">Deepak Singh</h2>
                <h4>Salesforce Developer</h4>
            </div>
            <div className="portfolio-contact">
                <h4>Download CV</h4>
                <h4>Contact</h4>
            </div>
        </div>
    )
}

export default Personal
