// src/Home.jsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const StatsChart = ({ graphData }) => {
  const chartData = {
    labels: graphData.labels,
    datasets: [
      {
        label: 'Left Clicks',
        data: graphData.leftClicks,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Right Clicks',
        data: graphData.rightClicks,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Keypresses',
        data: graphData.keyPresses,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
      {
        label: 'Mouse Movement (feet)',
        data: graphData.mouseMovement,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'hour',
          displayFormats: {
            hour: 'ha' // Format hours as AM/PM
          },
        },
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};



const Home = () => {
  const [stats, setStats] = useState({
    distance: 0,
    numRight: 0,
    numLeft: 0,
    keyPresses: 0,
  });

  const [graphData, setGraphData] = useState({
    labels: [],
    leftClicks: [],
    rightClicks: [],
    keyPresses: [],
    mouseMovement: [],
  });

  useEffect(() => {
    fetchStats();
    const intervalId = setInterval(fetchStats, 30000);
    return () => clearInterval(intervalId);
  }, []);
  
  const fetchStats = async () => {
    try {
      const response = await fetch('/api/updateStats');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Received Data", data);
      setGraphData({
        labels: data.labels,
        leftClicks: data.leftClicks,
        rightClicks: data.rightClicks,
        keyPresses: data.keyPresses,
        mouseMovement: data.mouseMovement,
      });
      setStats({
        distance: data.mouseMovement.reduce((a, b) => a + b, 0),
        numRight: data.rightClicks.reduce((a, b) => a + b, 0),
        numLeft: data.leftClicks.reduce((a, b) => a + b, 0),
        keyPresses: data.keyPresses.reduce((a, b) => a + b, 0)
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

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
          <a href="/projects" className="tile">Projects <img src="terminal.png" alt="Projects Icon" /></a>
          <a href="Aditya_Resume.pdf" className="tile">Resume <img src="resume.png" alt="Resume Icon" /></a>
        </div>
      </div>
      <div className="stats-heading"> <p>my activity</p></div>
      <div className="stats-container">
        <div className="stats-item">
          <h2>Left Clicks</h2>
          <p>{stats.numLeft}</p>
        </div>
        <div className="stats-item">
          <h2>Right Clicks</h2>
          <p>{stats.numRight}</p>
        </div>
        <div className="stats-item">
          <h2>Keypresses</h2>
          <p>{stats.keyPresses}</p>
        </div>
        <div className="stats-item">
          <h2>Mouse Movement</h2>
          <p>{Math.trunc(stats.distance)} feet</p>
        </div>
      </div>
      <div className="chart-section">
        <StatsChart graphData={graphData} />
      </div>
    </div>
  );
};

export default Home;