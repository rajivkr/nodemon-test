import express from 'express';
require('appmetrics-prometheus').attach();

const app = express();

/**
 * Get port from environment.
 */
const port = process.env.MAXIMUS_PORT || 5001;
app.set('port', port);

app.get('*', (req, res) => {
  res.send('app loaded');
});

app.listen(port || config.port, () => {
  console.log(`App started in port ${port}`);
});
