import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const DB_URL =
  "mongodb+srv://user:user@cluster0.bdgn7.mongodb.net/ListOrders?retryWrites=true&w=majority";

const PORT = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`SERVER WORK ON PORT: ${PORT}`));
  } catch (e) {
    console.error(e);
  }
}

startApp();
