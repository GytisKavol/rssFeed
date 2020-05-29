const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const compression = require("compression");
const helmet = require("helmet");
const path = require("path");
dotenv.config({ path: "./config/config.env" });

connectDB();

const urls = require("./routes/urls");
const articles = require("./routes/articles");
const keywords = require("./routes/keywords");
const articlesFiltered = require("./routes/articlesFiltered");

const app = express();
app.use(helmet());
app.use(compression());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/urls", urls);
app.use("/api/v1/articles", articles);
app.use("/api/v1/keywords", keywords);
app.use("/api/v1/articlesFiltered", articlesFiltered);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
