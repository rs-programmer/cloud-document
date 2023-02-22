const { app, APP_HOST, APP_PORT } = require('./app');

app.listen(APP_PORT, () => {
  console.log(`${APP_HOST}:${APP_PORT}`);
});
