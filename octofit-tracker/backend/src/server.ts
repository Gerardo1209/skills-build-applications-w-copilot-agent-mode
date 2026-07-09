import express from 'express';
import './config/database';
import apiRoutes from './routes';
import { getApiBaseUrl } from './config/api';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use('/api', apiRoutes);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', apiBaseUrl: getApiBaseUrl() });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
  console.log(`API base URL: ${getApiBaseUrl()}`);
});

export default app;
