import React from 'react'
import "../styles/Gifts.css"
import { useState, useEffect, useRef } from 'react'
import Earring from "../images/eartest.jpg"
import Necklace from "../images/necktest.jpg"
import Ring from "../images/ringtest.png"
import Purse from "../images/pursetest.jpg"
import Wallet from "../images/wallettest.jpg"
import Shoes from "../images/shoestest.jpg"
import BoardGame from "../images/boardgametest.jpg"
import Cards from "../images/cardstest.jpg"
import Airpod from "../images/airpodtest.jpg"
import Video from "../images/giftsbg.mp4"
import db from "../firebase"
import {onSnapshot, collection, doc, setDoc} from "firebase/firestore"
import ReactAudioPlayer from 'react-audio-player';
import sound from '../audios/gifts.mp3';

const Gifts = () => {
    const [option1, setO1] = useState('')
    const [option2, setO2] = useState('')
    const [option3, setO3] = useState('')
    const [showResults1, setShowResults1] = useState(false)
    const [showResults2, setShowResults2] = useState(false)
    const [showResults3, setShowResults3] = useState(false)
    const [showResults4, setShowResults4] = useState(false)
    const [showResults5, setShowResults5] = useState(true)
    const [savedStatus, setSaveResults] = useState("Not Saved Yet")
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
        onSnapshot(collection(db,"gifts"),(snapshot)=>{
            const hello = snapshot.docs.map(doc => doc.data())
            setO1(hello[0].gift1)
            setO2(hello[0].gift2)
            setO3(hello[0].gift3)
        });
    },[]);

    const handleNew = async () =>{
        setSaveResults("Saved")
        const docRef = doc(db, "gifts", "GpDamnBbdUy1jbrH9P4k");
        const payload = {gift1 : option1, gift2 : option2, gift3 : option3};
        await setDoc(docRef, payload);
    }

    return (
        <div>
            <video autoPlay muted loop id="bg">
                <source src={Video} type="video/mp4"/>
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
            <div class = "giftBox">
            {showResults5 ?
                <div>
                <div class = "options">
                    <div class = "obox2">
                    This year I'm doing something different for your present. I will give you options to choose from and whatever you choose
                    I will buy it for you, however the categories are broad so there will still be some what of a surpise when you get your
                    gift. I will order the stuff to Buffalo that way you don't have to worry about extra packing space. Of course if you want
                    I can ship it to your house too.
                    </div>
                    <div class = "buttonFlex">
                    <span class="giftButton" onClick = {() => {setShowResults3(true); setShowResults5(false);}}>Next</span>
                    </div>
                    </div>
                </div>
                : null }

            {showResults1 ?
                <div>
                <div class = "options">
                <div class = "giftTop">You have chosen {option1}</div>
                    <div class = "obox">
                    <label class = "giftlabel">
                        <img alt = "Earring" class = "giftimg" src = {Earring}></img>
                        
                        <input type = "radio"
                                value = "Earring"
                                checked = {option1 === "Earring"}
                                onChange={(e) => setO1  (e.target.value)}/>
                    </label>
                    <label class = "giftlabel">
                    <img alt = "Necklace" class = "giftimg" src = {Necklace}></img>
                        <input type = "radio"
                                value = "Necklace"
                                checked = {option1 === "Necklace"}
                                onChange={(e) => setO1(e.target.value)}/>
                    </label>
                    <label class = "giftlabel">
                    <img alt = "Ring" class = "giftimg" src = {Ring}></img>
                        <input type = "radio"
                                value = "Ring"
                                checked = {option1 === "Ring"}
                                onChange={(e) => setO1(e.target.value)}/>
                    </label>
                    </div>
                    <div class = "descriptionText">
                    {option1===""? "Click an image!":
                    option1 === "Earring" ? "More earrings!!!! You have like 50!":
                    option1 === "Necklace"? "I'll get you a necklace you can wear since you don't have many.":
                    option1 === "Ring" ? "I'll get you a ring in box and get on one knee and give it to you. Minus the box and the getting on one knee.":
                    null}
                    </div>
                    <div class = "buttonFlex">
                    <span class="giftButton" onClick = {() => {setShowResults2(true); setShowResults1(false);}}>Back</span>
                    <span class="giftButton" onClick = {() => {setShowResults4(true); setShowResults1(false);}}>Next</span>
                    </div>
                    </div>
                </div>
                : null }

                {showResults2 ?
                <div>
                <div class = "options">
                <div class = "giftTop">You have chosen {option2}</div>
                    <div class = "obox">
                    <label class = "giftlabel">
                        <img alt = "Purse" class = "giftimg" src = {Purse}></img>
                        
                        <input type = "radio"
                                value = "Purse"
                                checked = {option2 === "Purse"}
                                onChange={(e) => setO2  (e.target.value)}/>
                    </label>
                    <label class = "giftlabel">
                    <img alt = "Wallet" class = "giftimg" src = {Wallet}></img>
                        <input type = "radio"
                                value = "Wallet"
                                checked = {option2 === "Wallet"}
                                onChange={(e) => setO2(e.target.value)}/>
                    </label>
                    <label class = "giftlabel">
                    <img alt = "Shoes" class = "giftimg" src = {Shoes}></img>
                        <input type = "radio"
                                value = "Shoes"
                                checked = {option2 === "Shoes"}
                                onChange={(e) => setO2(e.target.value)}/>
                    </label>
                    </div>
                    <div class = "descriptionText">{option2===""? "Click an image!" : option2 === "Purse" ? "I will buy you a purse! If there is a certain design you prefer let me know or you can see what I choose!":
                    option2 === "Wallet"? "I will buy you a wallet! Don't you already have a ton of wallets already!?":option2 === "Shoes" ? "I will buy you a pair of shoes. They can be either dress shoes or sneakers. You're going to have to tell me your shoe size!":null}</div>
                    <div class = "buttonFlex">
                    <span class="giftButton"  onClick = {() => {setShowResults3(true); setShowResults2(false);}}>Back</span>
                    <span class="giftButton"  onClick = {() => {setShowResults1(true); setShowResults2(false);}}>Next</span>
                    </div>
                    </div>
                </div>
                : null }

                {showResults3 ?
                <div>
                <div class = "options">
                <div class = "giftTop">You have chosen {option3}</div>
                    <div class = "obox">
                    <label class = "giftlabel">
                        <img alt = "Board Game" class = "giftimg" src = {BoardGame}></img>
                        
                        <input type = "radio"
                                value = "Board Game"
                                checked = {option3 === "Board Game"}
                                onChange={(e) => setO3  (e.target.value)}/>
                    </label>
                    <label class = "giftlabel">
                    <img alt = "Cards" class = "giftimg" src = {Cards}></img>
                        <input type = "radio"
                                value = "Pokemon Cards"
                                checked = {option3 === "Pokemon Cards"}
                                onChange={(e) => setO3(e.target.value)}/>
                    </label>
                    <label class = "giftlabel">
                    <img alt = "Airpod Case" class = "giftimg" src = {Airpod}></img>
                        <input type = "radio"
                                value = "Airpod Case"
                                checked = {option3 === "Airpod Case"}
                                onChange={(e) => setO3(e.target.value)}/>
                    </label>
                    </div>
                    <div class = "descriptionText">
                    {option3===""? "Click an image!":
                    option3 === "Board Game" ? "I will buy you a board game you don't have so you can collect it!":
                    option3 === "Pokemon Cards"? "I'll buy you a few packs of Pokemon cards that we can open together!":
                    option3 === "Airpod Case" ? "I'll get you an Airpod case since the Gudetama one keeps falling off.":
                    null}
                    </div>
                    <div class = "buttonFlex">
                    <span class="giftButton"  onClick = {() => {setShowResults5(true); setShowResults3(false);}}>Back</span>
                    <span class="giftButton"  onClick = {() => {setShowResults2(true); setShowResults3(false);}}>Next</span>
                    </div>
                    </div>
                </div>
                : null }

                {showResults4 ?
                <div>
                <div class = "options">
                    <div class = "obox2">
                    For option 1 you have chosen {option3 ===""? "nothing": option3}
                    <br></br>
                    For option 2 you have chosen {option2 ===""? "nothing": option2}
                    <br></br>
                    For option 3 you have chosen {option1 ===""? "nothing": option1}
                    </div>
                    <div class = "buttonFlex">
                        <span class="giftButton" onClick = {() => {setShowResults1(true); setShowResults4(false); setSaveResults("Not Saved");}}>Back</span>
                        <span class="saveButton" onClick={()=>handleNew()}> Save Choices </span>
                    </div>
                    <div>
                        {savedStatus}
                    </div>
                    </div>
                </div>
                : null }
            </div>
        </div>
    )
}

export default Gifts
