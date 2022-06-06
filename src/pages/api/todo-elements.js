import { MongoClient } from 'mongodb';

async function handler(req, res){
  const uri = "mongodb+srv://admin:1qaz2wsx@todo-elements.zloeyla.mongodb.net/todo-elements-database?retryWrites=true&w=majority";
  const client = await MongoClient.connect(uri);

  if(req.method === 'POST'){
    const body = req.body;
    const db = client.db();

    await db.collection('todo-elements-collection').insertOne(body);

    client.close();
    res.status(201).json({message: 'Added!'})
  }

  if(req.method === 'GET') {
    const db = client.db();

    const todoElements = await db.collection('todo-elements-collection').find().toArray();

    res.status(200).json(todoElements);
  }
}

export default handler;