//external exports
import express from "express";
import cors from "cors";
//internal imports
import userRoutes from "./router/userRoutes";
const app = express();
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT || 8888, () => {
  console.log(`Server is running on port ${process.env.PORT || 8888}`);
});
app.get("/", (req, res) => {
  res.send("Sever is alive");
});
app.use("/api/v1/user", userRoutes);
