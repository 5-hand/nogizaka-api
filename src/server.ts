import express from "express";
import indexRouter from "./routes/index";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

mongoose.Promise = global.Promise;

//mongoose'sのfindOneAndUpdateはmongoDBのfindOneAndUpdateより圧倒的に前に出来上がったものなので、
//何も指定していないと勝手に最新のmongoDBの方を使うので、ここで使わないように設定する
mongoose.connect("mongodb://heroku_5w6dw966:1tu492oa8jte6arkod1qpe6usc@ds137508.mlab.com:37508/heroku_5w6dw966", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("port", process.env.PORT || 3001);

app.use(cors());

app.use(
  express.urlencoded({
    extended: false,
    limit: "10mb"
  })
);

app.use(express.json({ limit: "10mb" }));

app.use("/", indexRouter);

app.listen(app.get("port"), () => {
    console.log(
      `The Express.js server has started and is litstening on port number:${app.get(
        "port"
      )}`
    );
})
