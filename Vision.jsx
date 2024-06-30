import React from 'react';

const Projects = () => {
  return (
   <div id="foreground">
        <div id="introSection">
            <div id="introImage" style={{backgroundImage:"url(Chess_Vision_SS1.jpg)", borderRadius:"0"}}></div>
            <div id="introText">
                <h1> Chess Vision Program</h1>
                <h4 style={{color: "#AAA"}}> Get a chess position from a picture of a chess board</h4>
                <p>Developed an computer vision program capable of recognizing and analyzing chessboard positions from images. The program efficiently extracts a chessboard from a given picture and accurately identifies the positions of the pieces, facilitating the conversion of these positions into a standard chess notation (FEN - Forsyth-Edwards Notation).</p>
                <p>This program is written in Python, using ML libraries such as TensorFlow for machine learning, OpenCV for image processing. The system is adept at handling various lighting conditions and angles, ensuring reliable performance across diverse scenarios. The primary application of this tool is to digitize chess games from physical boards, offering a cost-effective alternative to expensive digital boards.</p>
                <p> The step by step process is shown in the images below. I group the lines in the 3rd picture which are closer together into 1 and divide chessboard into 64 individual squares. Then we sent the subsquare into a trained model to predict the chess piece. Then we finally construct fen from it. We get the output like this:- <br></br>Image: test4.jpg<br></br> Ground Truth FEN: r1b1kbnr/1pp11ppp/p1p11111/11111111/111NP111/11111111/PPP11PPP/RNB1K11R <br></br>Inception Model FEN: rnrNkrnr/npp11ppp/pnp11111/11111111/111NP111/11111111/PPP11BPN/rNB1N11N, Accuracy: 84.50704225352112% <br></br>ResNet Model FEN: rNrNkrnr/Nbp11ppp/pNp11111/1111111N/11NNQ111/1111111N/BPN1NPPP/RNNNNPPR, Accuracy: 73.23943661971832%</p>
            </div>
        </div>
        <div id="imageSection">
            <div class="imageContainer">
                <div class="imageRow">
                    <div class="imageItem" style={{backgroundImage: "url('Chess_Vision_SS1.jpg')"}}></div>
                    <div class="imageItem" style={{backgroundImage: "url('Chess_Vision_SS2.jpg')"}}></div>
                    <div class="imageItem" style={{backgroundImage: "url('Chess_Vision_SS3.jpg')"}}></div>
                </div>
                <div class="imageDescription">
                    These images showcase the program’s step by step process of recognizing a chessboard.
                </div>
            </div>
        </div>
    </div> 
  );
};

export default Projects;
