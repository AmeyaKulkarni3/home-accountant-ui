import { Category } from "./category.model";

export interface Transaction{
    id: number;

    category: Category;

    amount: number;

    transactionDate: string;

    description: string;
}