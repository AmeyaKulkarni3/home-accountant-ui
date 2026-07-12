import { TransactionType } from "./transaction-dialog-data";

export interface CategoryResponse {
    readonly id : number;
    readonly name: string;
    readonly type : TransactionType;
}