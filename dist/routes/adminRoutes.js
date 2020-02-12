'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var adminController_1 = __importDefault(require("../controllers/adminController"));
var router = express_1.default.Router();
router.get("/:rootpwd", adminController_1.default.checkParams, adminController_1.default.sendFile);
exports.default = router;
