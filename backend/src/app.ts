import express from "express";
import cors from "cors";
import gridRoutes from "@routes/grid/grid.route";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/grid", gridRoutes);

export default app;
