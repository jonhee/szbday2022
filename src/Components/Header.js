import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Header.css"

const Header = () => {
    return (
        <div>
            <div class = "headerFlex">
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/games">Games</Link></li>
                    <li><Link to ="/shows">Shows</Link></li>
                    <li><Link to ="/music">Music</Link></li>
                    <li><Link to ="/gifts">Gifts</Link></li>
                    <li><Link to ="/letter">Letter</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
