"use strict";

import express from "express";
import memberController from "../controllers/memberController";

const router = express.Router();

router.post(
  "/upload",
  memberController.upload
);
router.put(
  "/update",
  memberController.update
);
router.delete(
  "/delete",
  memberController.delete
);
router.get("/members", memberController.getAllMembers);

export default router;
