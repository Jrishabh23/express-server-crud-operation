import express from "express";
import router from "./route.js";
const app = express();
app.use(express.json());
app.use(router);
app.get("/", (req, res) => {
    console.log("default route");
});
app.listen(5000, (err, res) => {
    console.log("port is on");
});
