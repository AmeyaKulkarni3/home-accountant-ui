
export enum TransactionType {
    INCOME = 'INCOME',
    EXPENSE = 'EXPENSE'
}

export enum DialogMode {
    CREATE = 'CREATE',
    EDIT = 'EDIT'
}

export interface TransactionDialogData {
  readonly mode: DialogMode;
  readonly type: TransactionType;
  readonly transactionId?: number;
}
