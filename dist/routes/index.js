"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var errorRoutes_1 = __importDefault(require("./errorRoutes"));
var memberRoutes_1 = __importDefault(require("./memberRoutes"));
var searchRoutes_1 = __importDefault(require("./searchRoutes"));
var adminRoutes_1 = __importDefault(require("./adminRoutes"));
var router = express_1.default.Router();
router.use("/member", memberRoutes_1.default);
router.use("/search", searchRoutes_1.default);
router.use("/admin", adminRoutes_1.default);
router.use("/", errorRoutes_1.default);
exports.default = router;
