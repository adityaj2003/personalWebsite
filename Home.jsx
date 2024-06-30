// Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div id="foreground">
        <div id="introSection">
            <div id="introImage"></div>
            <div id="introText">
                <p>Hello! Welcome to my personal website. This is a place to share my personality and experiences a little more than what is seen on a 1 page resume.</p>
                <p>I am Aditya Jadhav, junior at the University of Arizona currently majoring in CS with a minor in SDS (Statistics and Data Science). I have experience with Java and Python. Currently interested and working on ML/AI projects with Python, TensorFlow, Scikit-learn, NumPy. I have experience working with Web development mainly MERN Stack. Have also worked with AWS and Database Systems (MongoDB and PostGreSQL). My Projects can be accessed through the Projects section at the bottom.</p>
                <p>I currently work as a Software Engineer Intern at Astrocomm Technologies mainly in building GUIs using wxPython and writing Arduino C code to handle ADC data. My future work involves elasticsearch analyzing data using ML techniques. Apart from that I worked under Dr. Chicheng Zhang at the UArizona CS Department on active learning using early stopping gradient descent under Tsybakov Noise. Wrote the theoretical algorithm into code for reducing label complexity in Python. I also previously worked as an Undergraduate Research Assistant at the ToMCAT project. I made a Flask webapp using Python for the project previously and data visualisation dashboard using wxWidgets and C++ for displaying sensor data captured throughout the experiment.</p>
            </div>
        </div>
        <div id="tilesSection">
            <div id="tilesContainer">
                <a href="/projects" class="tile">Projects <img src="terminal.png" alt="Projects Icon"></img></a>
                <a href="Aditya_Resume.pdf" class="tile">Resume<img src="resume.png" alt="Resume Icon"></img></a>
            </div>
        </div>
    </div>
  );
};

export default Home;

