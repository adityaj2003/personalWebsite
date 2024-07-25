import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://adityaj2003:${process.env.MONGODB_PWD}@cluster0.dcg6idk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
    tls: true,
    tlsAllowInvalidCertificates: true, // This allows invalid certificates. Use with caution.
    tlsAllowInvalidHostnames: true // This allows invalid hostnames. Use with caution.
  });

  global._mongoClientPromise = client.connect().then((client) => {
    console.log("MongoDB connected successfully");
    return client;
  }).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
}
clientPromise = global._mongoClientPromise;

const fetchGraphData = async () => {
  const now = new Date();
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  try {
    const client = await clientPromise;
    if (!client) {
      throw new Error("Failed to connect to MongoDB");
    }
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
      const client = await clientPromise;
      if (!client) {
        throw new Error("Failed to connect to MongoDB");
      }
      const database = client.db("PersonalWebsite");
      const collection = database.collection("metrics");
      await collection.insertOne(stats);
      res.status(200).json({ message: 'Data updated successfully' });
    } catch (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ message: 'Internal server error' });
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
