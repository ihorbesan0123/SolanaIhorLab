import BN from "bn.js";
import { Commitment, Connection, PublicKey } from "@solana/web3.js";
export declare function checkFileExists(filePath: string): Promise<boolean>;
export declare const xWeiAmount: (amount: number, decimals: number) => BN;
export declare const getConnection: (commitment: Commitment) => Connection;
export declare const getWalletAccounts: (connection: Connection, wallet: PublicKey) => Promise<{
    pubkey: PublicKey;
    programId: PublicKey;
    accountInfo: {
        mint: PublicKey;
        delegate: PublicKey;
        owner: PublicKey;
        state: number;
        amount: BN;
        delegateOption: number;
        isNativeOption: number;
        isNative: BN;
        delegatedAmount: BN;
        closeAuthorityOption: number;
        closeAuthority: PublicKey;
    };
}[]>;
export declare function getATAAddress(programId: PublicKey, owner: PublicKey, mint: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
export declare const sleep: (ms: number) => Promise<unknown>;
