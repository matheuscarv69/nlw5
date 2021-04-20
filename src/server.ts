import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  return res.json({ message: "Initial route by NLW5!" })
})

app.post('/', (req, res) => {
  const people = req.body;
  return res.send({ people })
})

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});

