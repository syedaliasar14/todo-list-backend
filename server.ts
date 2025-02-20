import express from 'express';
import cors from 'cors';
import { PORT } from './constants';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
