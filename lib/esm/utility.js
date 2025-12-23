var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import BN from "bn.js";
import * as fs from "fs";
import BigNumber from "bignumber.js";
import { Connection, PublicKey } from "@solana/web3.js";
import { EnvironmentManager } from "./global";
export function checkFileExists(filePath) {
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
export const xWeiAmount = (amount, decimals) => {
    return new BN(new BigNumber(amount.toString() + "e" + decimals.toString()).toFixed(0));
};
export const getConnection = (commitment) => {
    return new Connection(EnvironmentManager.getRpcNetUrl(), commitment);
};
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
