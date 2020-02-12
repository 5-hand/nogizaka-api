"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
module.exports = {
    checkParams: function (req, res, next) {
        var password = req.params.rootpwd;
        if (password === 'effort_thanks_smile') {
            next();
        }
        else {
            next(Error);
        }
    },
    sendFile: function (req, res, next) {
        res.send(express_1.default.static(path_1.default.join(__dirname, "client/build")));
    }
};
