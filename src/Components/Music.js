import React from 'react'
import Quiz from './Quiz'
import { MusicQuestions } from '../Questions/MusicQuestions'

const Music = () => {
    return (
        <div>
            <Quiz quizType = {MusicQuestions}></Quiz>
        </div>
    )
}

export default Music
