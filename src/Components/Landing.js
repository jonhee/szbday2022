import React from 'react'
import "../styles/Landing.css"
import Background from "../images/bg.jpg"
import {Link} from 'react-router-dom'
import Video from "../images/background.mp4"

const Landing = () => {
    return (
        <div>
            <video autoPlay muted loop id="bg">
                <source src={Video} type="video/mp4"/>
            </video>
            <div class = "landingFlex">
                <div class = "choicesFlex">
                    <ul>
                        <li><Link class = "imgs games" to ="/games"></Link></li>
                        <li><Link class = "imgs shows" to ="/shows"></Link></li>
                        <li><Link class = "imgs music" to ="/music"></Link></li>
                        <li><Link class = "imgs gifts" to ="/gifts"></Link></li>
                        <li><Link class = "imgs letter" to ="/letter"></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Landing
