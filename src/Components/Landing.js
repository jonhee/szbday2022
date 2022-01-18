import React from 'react'
import "../styles/Landing.css"
import {Link} from 'react-router-dom'
import Video from "../images/background.mp4"
import {onSnapshot, collection} from "firebase/firestore"
import db from "../firebase"
import { useState, useEffect, useRef} from 'react'
import ReactAudioPlayer from 'react-audio-player';
import sound from '../audios/landing.mp3';

const Landing = () => {
    const [counters, setCounter] = useState(0)
    const [pauseState, setPauseState] = useState(false)

    const player = useRef();
    const toggleSound = () => {
        console.log("hello")    
        if(!pauseState){
            player.current.audioEl.current.pause()
        }
        else{
            player.current.audioEl.current.play()
        }
        setPauseState(!pauseState)
    }
    
    useEffect(() => {
        onSnapshot(collection(db,"quizs"),(snapshot)=>{
            const hello = snapshot.docs.map(doc => doc.data())
            setCounter(counters+hello[0].game+hello[0].music+hello[0].shows);
        });
    },[]);

    return (
        <div class = "whole">
            <video autoPlay muted loop id="bg">
                <source src={Video} type="video/mp4"/>
            </video>
            <ReactAudioPlayer src={sound} loop autoPlay volume={.1} ref = {player}/>
            {pauseState?
            <div class = "musicToggle" onClick={()=>toggleSound()}>Music On</div>:
            <div class = "musicToggle" onClick={()=>toggleSound()}>Music Off</div>
            }
            <div class = "landingFlex">

                <div class = "choicesFlex">
                    <ul>
                        <li class = "unlockedli"><Link class = "imgs games" to ="/szbday2022/games"></Link></li>
                        <li class = "unlockedli"><Link class = "imgs shows" to ="/szbday2022/shows"></Link></li>
                        <li class = "unlockedli"><Link class = "imgs music" to ="/szbday2022/music"></Link></li>
                        {counters>1?
                        <li class = "unlockedli"><Link class = "imgs gifts" to ="/szbday2022/gifts"></Link></li>:
                        <li class = "lockedli"><p class = "imgs locked"></p></li>}
                        {counters>2?
                        <li class = "unlockedli"><Link class = "imgs letter" to ="/szbday2022/letter"></Link></li>:
                        <li class = "lockedli"><p class = "imgs locked"></p></li>}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Landing
