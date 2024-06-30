// Projects.jsx
import React from 'react';

const Projects = () => {
  return (
   <div id="foreground">
        <div id="introSection">
            <div id="introText">
                <h1>Wordle Game</h1>
                <p>Built a working replica of the popular wordle game implementing Object Oriented Programming. The GUI works exactly like the wordle game with animations, on screen buttons and keyboard input.</p>
                <p>The program is made using Java and JavaFX keeping OOP in mind. This was built as a class project which I implemented further and implemented on-screen buttons along with keyboard input and further improved the aesthetics with getting the original colors of wordle by inspect-element. Also has animations which are implemented by JavaFX</p>
                 </div>
        </div>
        <div id="imageSection">
            <div class="imageContainer">
                <div class="imageRow">
                    <div class="imageItem" style={{backgroundImage: "url(Wordle_SS.jpg)"}}></div>
                </div>
                <div class="imageDescription">
                    First image shows the Extension on the chrome web browser. It automatically extracts the url of the current youtube page being played and sends it to the server for processing. The second image shows the summary of the URL in your selected notion page.
                </div>
            </div>
        </div>
    </div> 
  );
};

export default Projects;


