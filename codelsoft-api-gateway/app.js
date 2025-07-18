import { config } from "dotenv";
import express from "express";
import morgan from 'morgan';
import loadClient from "./grpcClient.js";
import billingRouter from "./src/routes/billingRouter.js";
import videosRouter from "./src/routes/videosRouter.js";
import authRouter from "./src/routes/authRouter.js";
import usersRouter from "./src/routes/usersRouter.js";
import playlistsRouter from "./src/routes/playlistRouter.js";
import socialRouter from "./src/routes/socialRouter.js";
import monitoringRouter from "./src/routes/monitoringRouter.js";

config({ path: ".env" });
const app = express();
app.use(morgan('dev'));

app.use(express.json());
app.use(morgan('dev'));

app.get("/", (req, res) => {
    console.log("Received a request at the root endpoint");
    res.status(200).send("OK");
});

loadClient(app);

app.use("/facturas", billingRouter);
app.use("/videos", videosRouter);
app.use("/auth", authRouter);
app.use("/usuarios", usersRouter);
app.use("/listas-reproduccion", playlistsRouter);
app.use("/monitoreo", monitoringRouter);
app.use("/interacciones",socialRouter)

app.listen(process.env.PORT, () => {
  console.log(`- Entorno:      ${process.env.NODE_ENV}`);
  console.log(`- Puerto:       ${process.env.PORT}`);
  console.log(`- URL:          http://localhost:${process.env.PORT}`);
});