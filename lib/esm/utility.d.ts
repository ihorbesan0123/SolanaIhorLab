import BN from "bn.js";
export declare function checkFileExists(filePath: string): Promise<boolean>;
export declare const xWeiAmount: (amount: number, decimals: number) => BN;
export declare const sleep: (ms: number) => Promise<unknown>;
