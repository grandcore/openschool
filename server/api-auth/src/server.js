'use strict';

const express = require('express');
const cors = require('cors');
const router = require('./routes/authRouter')

// constants (CODESTYLE,constants are written in capital letters)
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// the application
const app = express();
app.use(express.json());
app.use(cors());
app.use('api/api-auth', router);

app.get('/', (req, res) => {
  res.send('I\'m api-auth');
});

const start = async () => {
  try {
      app.listen(PORT, HOST, ()=>console.log(`running on http://${HOST}:${PORT}`));

  } catch (e) {
      console.log(e);
  }
}

start();

// app.listen(port, host);
// console.log(`running on http://${host}:${port}`);