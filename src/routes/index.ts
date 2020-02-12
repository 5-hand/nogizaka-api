"use strict";

import express from "express";
import errorRoutes from "./errorRoutes";
import memberRoutes from "./memberRoutes";
import searchRoutes from "./searchRoutes";

const router = express.Router();

router.use("/member", memberRoutes);
router.use("/search", searchRoutes);
router.use("/", errorRoutes);

export default router;
