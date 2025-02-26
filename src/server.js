import express from 'express';
import 'dotenv/config'
import connect from './db/connect.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
connect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});