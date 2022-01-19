import React from 'react'
import Quiz from './Quiz'
import { useState, useEffect, useRef } from 'react'
import { ShowsQuestions } from '../Questions/ShowsQuestions'
import ReactAudioPlayer from 'react-audio-player';
import sound from '../audios/shows.mp3';
import showsVid from "../images/showsbg.mp4"

const Shows = () => {
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
                <source src={showsVid} type="video/mp4"/>
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
            <Quiz quizType = {ShowsQuestions}></Quiz>:
            <div class = "introFlexBox">
            <div class = "introFlex">
            <div class = "introHeader">In this section you will answer 5 questions related to shows we watched from last year! Get 4/5 right and you'll pass the quiz!
            If you are doing this in order after you complete this you section you should unlock a new page you can enter if you check in the home page! I suggest you finish the Music section
            before you check out the new section but it's up to you!
            </div>
            <div class = "introButton"onClick={()=>setStartState(true)}>Start</div>
            </div>
            </div>
            }
        </div>
    )
}

export default Shows
