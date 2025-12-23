import BN from "bn.js";
import * as fs from "fs";
import BigNumber from "bignumber.js";
import { Commitment, Connection, PublicKey } from "@solana/web3.js";
import { EnvironmentManager } from "./global";

export async function checkFileExists(filePath: string): Promise<boolean> {
  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    return true; // File exists
  } catch (error) {
    return false; // File doesn't exist
  }
}

export const xWeiAmount = (amount: number, decimals: number) => {
  return new BN(
    new BigNumber(amount.toString() + "e" + decimals.toString()).toFixed(0)
  );
};

export const getConnection = (commitment: Commitment): Connection => {
  return new Connection(EnvironmentManager.getRpcNetUrl(), commitment);
};

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
