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
import BigNumber from "bignumber.js";

export const xWeiAmount = (amount, decimals) => {
    return new BN(new BigNumber(amount.toString() + "e" + decimals.toString()).toFixed(0));
};
export function randomDivide(amount, holders) {
    // Generate random values for each holder
    const randomValues = Array.from({ length: holders }, () => Math.random());
    // Normalize the random values to sum to 1
    const total = randomValues.reduce((acc, val) => acc + val, 0);
    const normalizedValues = randomValues.map((val) => val / total);
    // Divide the amount according to the normalized values
    const dividedAmounts = normalizedValues.map((val) => amount * val);
    return dividedAmounts;
}
