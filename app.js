const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const {mongoDB} = require('./src/config');
const PORT = process?.env?.PORT || 8000;
const routes = require('./route');
const {errorMiddleware} = require('./src/middleware');
mongoDB.connectDB();

// middlewares
app.use(express.json());
routes(app);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
