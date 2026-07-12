import { Transaction } from "./transaction.model";

export interface UserResponse {
    id : number;

    googleId : string;

    email : string;

    name : string;

    profilePicture : string;

    role : string;

    enabled : boolean;

    lastLoginAt : string;

    transactions : Transaction[];
}