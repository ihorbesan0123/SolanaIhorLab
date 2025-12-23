"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildInstToVersioned = exports.compileInstToVersioned = void 0;
const web3_js_1 = require("@solana/web3.js");
const errors_1 = require("../errors");
const compileInstToVersioned = (connection, payer, insts, signer, lookupAddr) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recentBlockhash = (yield connection.getLatestBlockhash("finalized"))
            .blockhash;
        if (lookupAddr) {
            const lookupTableAccount = (yield connection.getAddressLookupTable(new web3_js_1.PublicKey(lookupAddr))).value;
            const txn = new web3_js_1.VersionedTransaction(new web3_js_1.TransactionMessage({
                payerKey: payer.publicKey,
                instructions: insts,
                recentBlockhash: recentBlockhash
            }).compileToV0Message([lookupTableAccount]));
            return {
                txn: txn,
                singer: signer
            };
        }
        else {
            const txn = new web3_js_1.VersionedTransaction(new web3_js_1.TransactionMessage({
                payerKey: payer.publicKey,
                instructions: insts,
                recentBlockhash: recentBlockhash
            }).compileToV0Message());
            return {
                txn: txn,
                singer: signer
            };
        }
    }
    catch (error) {
        throw new errors_1.BuildInstructionError(`CompileInstToVersioned: ${error}`);
    }
});
exports.compileInstToVersioned = compileInstToVersioned;
