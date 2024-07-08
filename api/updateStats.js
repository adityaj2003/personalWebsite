const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');
const fastCsv = require('fast-csv');

const csvFilePath = path.resolve(__dirname, 'stats.csv');

const generateTimestamps = (numPoints) => {
  const timestamps = [];
  const now = new Date();
  for (let i = 0; i < numPoints; i++) {
    const timestamp = new Date(now - i * 5 * 60 * 1000);
    timestamps.unshift(timestamp);
  }
  return timestamps;
};

let graphData = {
  labels: generateTimestamps(288),
  leftClicks: new Array(288).fill(0),
  rightClicks: new Array(288).fill(0),
  keyPresses: new Array(288).fill(0),
  mouseMovement: new Array(288).fill(0),
};

// Function to read CSV data and initialize graphData
const initializeGraphData = async () => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(csvFilePath)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        if (results.length > 0) {
          graphData = {
            labels: results.map(row => new Date(row.timestamp)),
            leftClicks: results.map(row => parseInt(row.leftClicks)),
            rightClicks: results.map(row => parseInt(row.rightClicks)),
            keyPresses: results.map(row => parseInt(row.keyPresses)),
            mouseMovement: results.map(row => parseInt(row.mouseMovement)),
          };
        }
        resolve();
      })
      .on('error', (err) => {
        console.error('Error reading CSV file:', err);
        reject(err);
      });
  });
};

// Initialize graphData on startup
initializeGraphData().catch(err => console.error('Initialization error:', err));

const writeCsvData = async (data) => {
  return new Promise((resolve, reject) => {
    const ws = fs.createWriteStream(csvFilePath);
    fastCsv
      .write(data, { headers: true })
      .pipe(ws)
      .on('finish', resolve)
      .on('error', (err) => {
        console.error('Error writing CSV file:', err);
        reject(err);
      });
  });
};

const updateGraphData = (newData) => {
  const now = new Date().toISOString();

  graphData.labels.push(now);
  graphData.leftClicks.push(newData.numLeft);
  graphData.rightClicks.push(newData.numRight);
  graphData.keyPresses.push(newData.keyPresses);
  graphData.mouseMovement.push(newData.distance);

  if (graphData.labels.length > 288) {
    graphData.labels.shift();
    graphData.leftClicks.shift();
    graphData.rightClicks.shift();
    graphData.keyPresses.shift();
    graphData.mouseMovement.shift();
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { distance, numRight, numLeft, keyPresses } = req.body;
    if (distance === undefined || numRight === undefined || numLeft === undefined || keyPresses === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    updateGraphData({ distance, numRight, numLeft, keyPresses });

    const csvData = graphData.labels.map((label, index) => ({
      timestamp: label.toISOString(),
      leftClicks: graphData.leftClicks[index],
      rightClicks: graphData.rightClicks[index],
      keyPresses: graphData.keyPresses[index],
      mouseMovement: graphData.mouseMovement[index],
    }));

    try {
      await writeCsvData(csvData);
      res.status(200).json({ message: 'Data updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to write CSV data' });
    }
  } else if (req.method === 'GET') {
    try {
      await initializeGraphData(); // Ensure graphData is updated before sending it
      res.status(200).json(graphData);
    } catch (error) {
      res.status(500).json({ message: 'Failed to read CSV data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
