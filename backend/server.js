const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const { notFound, mainErrorHandler } = require("./middlewares/errorHandler");
const studentRouter = require('./routes/studentRoute');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();

app.use(studentRouter);
app.use(notFound);
app.use(mainErrorHandler);

const PORT = process.env.PORT || 4000;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server is listning at ${PORT}`);
});
