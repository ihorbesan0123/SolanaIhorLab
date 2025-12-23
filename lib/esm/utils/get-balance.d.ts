import { Connection, PublicKey } from "@solana/web3.js";
import BN from "bn.js";
export declare function getATAAddress(programId: PublicKey, owner: PublicKey, mint: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
export declare const xWeiAmount: (amount: number, decimals: number) => BN;
export declare function randomDivide(amount: number, holders: number): number[];
