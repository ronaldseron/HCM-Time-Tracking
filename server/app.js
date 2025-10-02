import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL
}));

app.use(express.json());

export default app;