"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var Schema = mongoose_1.default.Schema;
var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        default: ""
    },
    permission: {
        type: String,
        default: "user"
    }
}, {
    timestamps: true
});
userSchema.pre("save", function (next) {
    var user = this;
    if (user.email === "yusei5884@gmail.com") {
        user.permission = "root";
    }
    bcrypt_1.default
        .hash(user.password, 10)
        .then(function (hash) {
        user.password = hash;
        next();
    })
        .catch(function (error) {
        console.log("Error in hashing password: " + error.message);
        next(error);
    });
});
userSchema.methods.passwordComparison = function (inputPassword) {
    var user = this;
    return bcrypt_1.default.compare(inputPassword, user.password);
};
var User = mongoose_1.default.model("User", userSchema);
exports.default = User;
