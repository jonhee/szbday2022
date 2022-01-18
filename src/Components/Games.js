import React from 'react'
import Quiz from './Quiz'
import { useState, useEffect, useRef } from 'react'
import { PokeQuestions } from '../Questions/PokeQuestions'
import ReactAudioPlayer from 'react-audio-player';
import sound from '../audios/games.mp3';

const Games = () => {
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
            <Quiz quizType = {PokeQuestions}></Quiz>
        </div>
    )
}

export default Games
