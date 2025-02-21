import express from 'express';
import cors from 'cors';
import router from './routes/task.routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/tasks", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
