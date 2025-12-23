"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.getATAAddress = exports.getAvailablePoolKeyAndPoolInfo = exports.getWalletAccounts = exports.getConnection = exports.xWeiAmount = exports.checkFileExists = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const fs = __importStar(require("fs"));
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const web3_js_1 = require("@solana/web3.js");
const global_1 = require("./global");
function checkFileExists(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fs.promises.access(filePath, fs.constants.F_OK);
            return true; // File exists
        }
        catch (error) {
            return false; // File doesn't exist
        }
    });
}
exports.checkFileExists = checkFileExists;
const xWeiAmount = (amount, decimals) => {
    return new bn_js_1.default(new bignumber_js_1.default(amount.toString() + "e" + decimals.toString()).toFixed(0));
};
exports.xWeiAmount = xWeiAmount;
const getConnection = (commitment) => {
    return new web3_js_1.Connection(global_1.EnvironmentManager.getRpcNetUrl(), commitment);
};
exports.getConnection = getConnection;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
exports.sleep = sleep;
