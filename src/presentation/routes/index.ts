import { Router } from "express";
import { authRoutes } from "./authRoutes";

const router = Router();

router.use("/auth", authRoutes);

export { router as appRoutes };
