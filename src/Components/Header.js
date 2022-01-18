import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Header.css"
import header1 from "../images/header1.png"
import header2 from "../images/header2.png"

const Header = () => {
    return (
        <div>
            <div class = "headerFlex">
                <div class ="leftFlexS">
                <div class = "headerText">HAPPY BIRTHDAY SUKI</div><img src={header1}></img>
                </div>
                <ul>
                    <li><Link class = "link" to ="/szbday2022/">Home</Link></li>
                    <li><Link class = "link" to ="/szbday2022/games">Games</Link></li>
                    <li><Link class = "link" to ="/szbday2022/shows">Shows</Link></li>
                    <li><Link class = "link" to ="/szbday2022/music">Music</Link></li>
                </ul>
                <div class ="leftFlexS">
                <div class = "headerText">FROM JOHNNY</div><img src={header2}></img>
                </div>
            </div>
        </div>
    )
}

export default Header
