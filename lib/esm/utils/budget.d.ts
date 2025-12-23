/// <reference types="jito-ts/node_modules/@solana/web3.js" />
import { TransactionInfo } from "../instructions/build-instruction";
import { Connection } from "@solana/web3.js";
export declare const sell_remove_fees = 5000000;
export declare function getLamports(decimal: number): number;
export declare function setTransactionBudget(connection: Connection, transactions: TransactionInfo[], tip: number): Promise<TransactionInfo[] | undefined>;
