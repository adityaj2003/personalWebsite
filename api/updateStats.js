import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://adityaj2003:${process.env.MONGODB_PWD}@cluster0.dcg6idk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri);

const fetchGraphData = async () => {
  const now = new Date();
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  
  try {
    await client.connect();
    const database = client.db("PersonalWebsite");
    const collection = database.collection("metrics");
    
    const results = await collection.find({ timestamp: { $gte: twentyFourHoursAgo } }).sort({ timestamp: 1 }).toArray();

    const graphData = {
      labels: [],
      leftClicks: [],
      rightClicks: [],
      keyPresses: [],
      mouseMovement: []
    };

    results.forEach(result => {
      const timestamp = new Date(result.timestamp).toISOString();
      graphData.labels.push(timestamp);
      graphData.leftClicks.push(result.numLeft);
      graphData.rightClicks.push(result.numRight);
      graphData.keyPresses.push(result.keyPresses);
      graphData.mouseMovement.push(result.distance);
    });

    return graphData;
  } catch (err) {
    console.error('Error fetching data:', err);
    return null;
  } finally {
    await client.close();
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { distance, numRight, numLeft, keyPresses } = req.body;
    if (distance === undefined || numRight === undefined || numLeft === undefined || keyPresses === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const now = new Date();
    const stats = {
      distance,
      numRight,
      numLeft,
      keyPresses,
      timestamp: now
    };

    try {
      await client.connect();
      const database = client.db("PersonalWebsite");
      const collection = database.collection("metrics");
      await collection.insertOne(stats);
      res.status(200).json({ message: 'Data updated successfully' });
    } catch (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
  } else if (req.method === 'GET') {
    const graphData = await fetchGraphData();
    if (graphData) {
      res.status(200).json(graphData);
    } else {
      res.status(500).json({ message: 'Error fetching graph data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
