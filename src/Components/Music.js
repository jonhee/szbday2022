import React from 'react'
import { useState} from 'react'
import Quiz from './Quiz'
import { MusicQuestions } from '../Questions/MusicQuestions'
import musicVid from "../images/musicbg.mp4"

const Music = () => {
    const [startState, setStartState] = useState(false)
    return (
        <div>
            <video autoPlay muted loop id="bg">
                <source src={musicVid} type="video/mp4"/>
            </video>
            {startState?
            <Quiz quizType = {MusicQuestions}></Quiz>:
            <div class = "introFlexBox">
            <div class = "introFlex">
            <div class = "introHeader">In this section you will be given small snippets of songs and guess the song title!
            These songs were all released after your last birthday! If you answer four out of five questions you pass the quiz! If you did this in order this is the last one you need to pass!
            </div>
            <div class = "introButton"onClick={()=>setStartState(true)}>Start</div>
            </div>
            </div>
            }        
        </div>
    )
}

export default Music
