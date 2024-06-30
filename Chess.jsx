// Projects.jsx
import React from 'react';

const Projects = () => {
  return (
   <div id="foreground">
        <div id="introSection">
            <div id="introImage" style={{backgroundImage:"url(ChessLogo.svg)", borderRadius:"0"}}></div>
            <div id="introText">
                <p>Built a chess playing website using JS, React, Express, NodeJS. The website allows you to play with a computer engine, analyse a game, evaluate a position using the StockFish 14 chess engine, Chess.js and ChessBoard.js OSS projects.</p>
                <p>Update 1:<br></br> I added the ability to draw arrows on the chessboard using SVGs. In the project, I utilize dynamic SVG sprites to create interactive arrow icons. This feature is implemented through a combination of HTML, CSS, and JavaScript. </p>
                <p>Update 2:<br></br> I added a login feature which used Java Web Tokens and an encryption algorithm to securely send and verify users on the platform. I currently implemented it just for finding out how encryption and authentication works but plan on adding user specific data when I have money to store the data. </p>
                <p>Update 3: <br></br> I disabled the ability to fetch puzzles from AWS because of the high cost of AWS RDS DB. There are a 1000 visitors on the platform every month which adds to the inflation of cost.</p><br></br>
                <p>My initial idea was to build using PHP as that was what I learned in the Web Dev class at school but I quickly realized that finding resources for PHP is difficult and new age tech stacks are quickly taking over. I learned NodeJS, React as much as I needed and built the website over the summer. I am pretty happy with the result but I would definitely want to understand CDNs, load balancing and other large scale network management stuff from here on. I use an AWS PostGreSql RDBMS to store puzzle data. I now decided to call in 10 puzzle data at once at each ping of the server instead of calling 1 once and contantly pinging.</p>
                <p>This project also resulted in me contributing to lichess.org on their github. Looking at the scale of their github repo makes mine look like a drop in the ocean but I gained how to manage deployment ready code from looking over there code to make the changes (and the procedures they follow before pushing to prod).</p>
            </div>
        </div>
        <div id="imageSection">
            <div class="imageContainer">
                <div class="imageRow">
                    <div class="imageItem" style={{backgroundImage: "url('Chess1.png')"}}></div>
                    <div class="imageItem" style={{backgroundImage: "url('Chess2.png')"}}></div>
                    <div class="imageItem" style={{backgroundImage: "url('Chess3.png')"}}></div>
                </div>
                <div class="imageDescription">
                    This image shows the features of the game. Engine evaluating best move. The depth of evaluation is set to 20. Also seen are the toggles for computer play. We also see multiplayer screen in the middle and the successful puzzle screen on the right.
                </div>
            </div>
        </div>
    </div> 
  );
};

export default Projects;


