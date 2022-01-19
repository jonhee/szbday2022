import React from 'react'
import Quiz from './Quiz'
import { useState, useEffect, useRef } from 'react'
import { PokeQuestions } from '../Questions/PokeQuestions'
import ReactAudioPlayer from 'react-audio-player';
import sound from '../audios/games.mp3';
import "../styles/Intro.css"
import gamesVid from "../images/gamesbg.mp4"

const Games = () => {
    const [pauseState, setPauseState] = useState(false)
    const [startState, setStartState] = useState(false)

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
    return (
        <div>
                        <video autoPlay muted loop id="bg">
                <source src={gamesVid} type="video/mp4"/>
            </video>
            <ReactAudioPlayer
            src={sound}
            loop
            autoPlay
            volume={.1}
            ref = {player}
            />
            {pauseState?
            <div class = "musicToggle" onClick={()=>toggleSound()}>Music On</div>:
            <div class = "musicToggle" onClick={()=>toggleSound()}>Music Off</div>
            }
            {startState?
            <Quiz quizType = {PokeQuestions}></Quiz>:
            <div class = "introFlexBox">
            <div class = "introFlex">
            <div class = "introHeader">In this section you will answer 5 questions related to Pokemon Unite and Pokeon Go! If you answer four out of five
                questions you pass the quiz! Pass 2 different sections to unlock a new page! Pass 3 different sections to unlock another page!
                Let's see how much you remember!
            </div>
            <div class = "introButton"onClick={()=>setStartState(true)}>Start</div>
            </div>
            </div>
            }
        </div>
    )
}

export default Games
