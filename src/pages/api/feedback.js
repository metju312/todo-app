function handler(req, res) {
  if(req.method === 'POST') {
    const title = req.body.title;
    const description = req.body.description;

    const newTodoElement = {
      id: new Date().toISOString(),
      title: title,
      description: description
    }
    console.log('newTodoElement', newTodoElement);

    res.status(201).json({message: 'Added!'});
  } else {
    res.status(200).json({message: 'This works!'});
  }
}

export default handler;