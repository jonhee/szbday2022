import React, {useState} from 'react'
import { PokeQuestions } from '../Questions/PokeQuestions'
import {doc, updateDoc} from "firebase/firestore"
import db from "../firebase"
import { ShowsQuestions } from '../Questions/ShowsQuestions'
import { MusicQuestions } from '../Questions/MusicQuestions'
import "../styles/Quiz.css"
import gamesVid from "../images/gamesbg.mp4"
import showsVid from "../images/showsbg.mp4"
import musicVid from "../images/musicbg.mp4"
import ReactAudioPlayer from 'react-audio-player';

const Quiz = ({quizType}) => {
    const [currQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setCurrentOption] = useState("Choose an Option!")
    const [score, setCurrentScore] = useState(0)
    const [savedStatus, setSaveResults] = useState("Not Saved Yet")

    const nextQuestion = () => {
        setCurrentOption("Choose an Option!")
        if(quizType==PokeQuestions&&optionChosen===PokeQuestions[currQuestion].answer){
            setCurrentScore(score+1);
        }

        if(quizType==ShowsQuestions&&optionChosen===ShowsQuestions[currQuestion].answer){
            setCurrentScore(score+1);
        }

        if(quizType==MusicQuestions&&optionChosen===MusicQuestions[currQuestion].answer){
            setCurrentScore(score+1);
        }
        
        if(currQuestion<5){
            setCurrentQuestion(currQuestion+1);
        }
    };

    const handleNew = async () =>{
        setSaveResults("Saved")
        const docRef = doc(db, "quizs", "2XIygqHe46dXlxFpuGLd");
        if(quizType===PokeQuestions){
            await updateDoc(docRef, {
                game: 1
              });
        }
        if(quizType===ShowsQuestions){
            await updateDoc(docRef, {
                shows: 1
              });
        }
        if(quizType===MusicQuestions){
            await updateDoc(docRef, {
                music: 1
              });
        }
    }

    const restartQuiz = () =>{
        setCurrentScore(0);
        setCurrentQuestion(0);
        setCurrentOption("");
    };
    const currentQuiz = quizType;

    return (
        <div>
            {currentQuiz==PokeQuestions?
            <div>
            <video autoPlay muted loop id="bg">
                <source src={gamesVid} type="video/mp4"/>
            </video>
            </div>
            :
            currentQuiz==ShowsQuestions?
            <div>
            <video autoPlay muted loop id="bg">
                <source src={showsVid} type="video/mp4"/>
            </video>
            </div>
            :
            <div>
            <video autoPlay muted loop id="bg">
                <source src={musicVid} type="video/mp4"/>
            </video>
            </div>
            }
            <div class = "flexQuiz">
                {currQuestion<5?
                <div class = "flexQuizT">
                    <div class = "quizHeader">{currentQuiz[currQuestion].prompt}</div>
                    {currentQuiz==MusicQuestions?<div>
                    <ReactAudioPlayer
                    src={currentQuiz[currQuestion].music}
                    volume={.1}
                    controls
                    autoPlay
                    />
                    </div>
                    :
                    <div class = "divImg"><img class = "imgImg" src = {currentQuiz[currQuestion].img} ></img></div>
                    }
                    <div class = "choiceFlex">
                        <span class = "choiceButton" onClick={()=>setCurrentOption("A")}><span>A) {currentQuiz[currQuestion].optionA}</span></span>
                        <span class = "choiceButton" onClick={()=>setCurrentOption("B")}><span>B) {currentQuiz[currQuestion].optionB}</span></span>
                        <span class = "choiceButton" onClick={()=>setCurrentOption("C")}><span>C) {currentQuiz[currQuestion].optionC}</span></span>
                        <span class = "choiceButton" onClick={()=>setCurrentOption("D")}><span>D) {currentQuiz[currQuestion].optionD}</span></span>
                    </div>
                        <div class = "optionChosen">{optionChosen}</div>
                    <div class = "scoreFlex">
                    <span class = "submitButton" onClick={()=>nextQuestion()}> Submit </span>
                    <span class = "score">{score}/5</span>
                    </div>
                </div>
                :
                score<4?
                <div class = "flexQuizT">

                <div><div class = "optionChosen">Get atleast 4 questions right!</div>
                    <div class = "submitButton" onClick={()=>restartQuiz()}>Restart</div>
                </div>
                </div>:
                <div class = "flexQuizT">
                <div class = "optionChosen">You passed! Don't forget to save your score!</div>
                <div class = "optionChosen">{savedStatus}</div>
                <div class = "submitButton" onClick={()=>handleNew()}> Save Score! </div>
                </div>}
            </div>
        </div>
    )
}

export default Quiz