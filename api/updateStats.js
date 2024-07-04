// api/updateStats.js

// Temporary storage for incoming data
let graphData = {
  labels: [],
  leftClicks: [],
  rightClicks: [],
  keyPresses: [],
  mouseMovement: [],
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { distance, numRight, numLeft, keyPresses } = req.body;

    if (distance === undefined || numRight === undefined || numLeft === undefined || keyPresses === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const now = new Date();

    // Update graphData by removing the first element and adding the new data point
    graphData.labels.push(now);
    graphData.leftClicks.push(numLeft);
    graphData.rightClicks.push(numRight);
    graphData.keyPresses.push(keyPresses);
    graphData.mouseMovement.push(distance);

    if (graphData.labels.length > 288) {
      graphData.labels.shift();
      graphData.leftClicks.shift();
      graphData.rightClicks.shift();
      graphData.keyPresses.shift();
      graphData.mouseMovement.shift();
    }

    res.status(200).json({ message: 'Data updated successfully' });
  } else if (req.method === 'GET') {
    res.status(200).json(graphData);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

