'use strict';

import express from 'express';
import adminController from '../controllers/adminController'

const router = express.Router();

router.get("/:rootpwd", adminController.checkParams, adminController.sendFile);

export default router;