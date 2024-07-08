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

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { distance, numRight, numLeft, keyPresses } = req.body;
    if (distance === undefined || numRight === undefined || numLeft === undefined || keyPresses === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    updateGraphData({ distance, numRight, numLeft, keyPresses });

    res.status(200).json({ message: 'Data updated successfully' });
  } else if (req.method === 'GET') {
    res.status(200).json(graphData);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
