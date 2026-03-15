import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
const express = require("express");
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

//middleware
app.use(
  cors({
    //origin: "http://localhost:5173",  dev

    //az alábbi a vercel production
    origin: "project01-full-react-git-viliteszt-gummer11s-projects.vercel.app", // A Vercel-es URL-ed
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json()); // this middleware will parse JSON bodies: req.body

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});
