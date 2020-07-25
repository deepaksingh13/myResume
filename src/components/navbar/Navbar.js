import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav-content">
            <ul>
                <li className="text-center"><NavLink exact={true} to="/"><i className="fa fa-user"></i> <br/>About</NavLink></li>
                <li className="text-center"><NavLink to="/resume"><i className="fa fa-code"></i><br/>Resume</NavLink></li>
                <li className="text-center"><NavLink to="/contact"><i className="fa fa-map"></i><br/> Contact</NavLink></li>
                
            </ul>
        </div>
    )
}

export default Navbar;
