import express from 'express';
import { attach } from './helpers/appmetrics-prometheus';

const app = express();

/**
 * Get port from environment.
 */
const port = process.env.MAXIMUS_PORT || 5001;
app.set('port', port);

app.get('*', (req, res) => {
  res.send('app loaded');
});
attach();

app.listen(port || config.port, () => {
  console.log(`App started in port ${port}`);
});
