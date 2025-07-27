import express from 'express';
import bodyParser from 'body-parser';
import { searchLinkedIn } from './companyservice.js';
import { config } from './config.js';

const app = express();
app.use(bodyParser.json());

app.post('/search', async (req, res, next) => {
  try {
    const { organization, jobTitles } = req.body;
    const result = await searchLinkedIn({ organization, jobTitles });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

const port = config.server.port;
app.listen(port, () => console.log(`Server running on port ${port}`));
