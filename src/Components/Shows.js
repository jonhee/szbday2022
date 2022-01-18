import React from 'react'
import Quiz from './Quiz'
import { useState, useEffect, useRef } from 'react'
import { ShowsQuestions } from '../Questions/ShowsQuestions'
import ReactAudioPlayer from 'react-audio-player';
import sound from '../audios/shows.mp3';

const Shows = () => {
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
    return (
        <div>
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
            <Quiz quizType = {ShowsQuestions}></Quiz>
        </div>
    )
}

export default Shows
