import express from 'express';
import dotenv from 'dotenv';
import utilityRouter from './route';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use(express.json());
app.use('/', utilityRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});