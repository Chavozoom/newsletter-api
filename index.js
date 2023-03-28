import express from "express";
import userRoute from "./src/routes/user.route.js";
import swaggerRoute from "./src/routes/swagger.route.cjs";


const app = express();
app.use(express.json());

app.use("/user", userRoute);
app.use("/doc", swaggerRoute);


const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
