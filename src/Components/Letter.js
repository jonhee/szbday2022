import React from 'react'
import "../styles/Letter.css"
import bday1 from "../images/bday1.gif"
import bday2 from "../images/hug.gif"
import bday3 from "../images/house.gif"
import bday4 from "../images/coding.gif"
import bday5 from "../images/final.gif"
import Video from "../images/letterbg.mp4"

const Letter = () => {
    return (
        <div>
            <video autoPlay muted loop id="bg">
                <source src={Video} type="video/mp4"/>
            </video>
            <div class="book">

            <input type="checkbox" id="c1"/>
            <input type="checkbox" id="c2"/>
            <input type="checkbox" id="c3"/>
            <input type="checkbox" id="c4"/>
            <input type="checkbox" id="c5"/>


            <div id="cover">
                <img class = "fbimg" src={bday1}/>
            </div>

            <div class="flip-book">
                <div class="flip" id="p1">
                
                    <div class="back">
                        <img class = "fbimg" src={bday2}/>
                        <label class="back-btn" for="c1">Back</label>
                    </div>

                    <div class="front">
                        <p class = "letterText">Happy Birthday!
                        <br></br> 
                        I don't have a physical card for you this year so this is your card! 
                        Atleast you don't have to read my ugly handwriting.</p>
                        <label class="next-btn" for="c1">Next</label>
                    </div>
                </div>

                <div class="flip" id="p2">
                    <div class="back">
                        <img class = "fbimg" src={bday3}/>
                        <label class="back-btn" for="c2">Back</label>
                    </div>

                    <div class="front">
                        <p class = "letterText">Thank you for always being there with me.
                            You keep saying you're a pain or a hassle, but you bring me happiness more than anything. So stop saying that!
                            </p>
                        <label class="next-btn" for="c2">Next</label>
                    </div>
                </div>

                <div class="flip" id="p3">

                    <div class="back">
                        <img class = "fbimg" src={bday4}/>
                        <label class="back-btn" for="c3">Back</label>
                    </div>

                    <div class="front">
                        <p class = "letterText">Being able to live with you in the same house and wake up to a cutie like you every morning is like a dream come true 😉.
                            <br></br>I hope this year I can learn a bunch of new dishes you'll like and
                            improve on the current ones you already like. 
                           <br></br> I'll try my best to make sure you can be as stress free as possible so you can
                            do good again in school just like this year.
                        </p>
                        <label class="next-btn" for="c3">Next</label>
                    </div>
                </div>

                <div class="flip" id="p4">

                    <div class="back">
                        <img class = "fbimg" src={bday5}/>
                        <label class="back-btn" for="c4">Back</label>
                    </div>

                    <div class="front">
                        <p class = "letterText">I hope you enjoyed the website. I know it's not the best since I'm kinda rusty,
                            but I promise I'll make you an even better one next year.</p>
                        <label class="next-btn" for="c4">Next</label>
                    </div>
                </div>

            <div class="flip" id="p5">

                    <div class="back">
                        <label class="back-btn" for="c5">Back</label>
                    </div>

                    <div class="front">
                        <p class = "letterText">Love,
                            Johnny
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Letter
