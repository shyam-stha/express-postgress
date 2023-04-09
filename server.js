import express from "express";
import studentRoutes from "./src/routes/student-route.js";

const app = express();

app.use(express.json());
app.use("/api/v1/students", studentRoutes);
app.use("/", (err, req, res, next) => {
  console.error(err);
});

app.listen(3008, () => {
  console.log("server running on port 3008");
});
