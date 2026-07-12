import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  DialogMode,
  TransactionDialogData,
  TransactionType,
} from '../../features/transactions/models/transaction-dialog-data';
import { TransactionDialog } from '../../features/transactions/components/transaction-dialog/transaction-dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private readonly dialog = inject(MatDialog);

  openTransaction(data: TransactionDialogData) {
    return this.dialog.open(TransactionDialog, {
      width: '420px',
      maxWidth: '95vw',
      disableClose: true,
      autoFocus: true,
      data,
    });
  }

  openCreateIncome() {
    return this.openTransaction({
      mode: DialogMode.CREATE,
      type: TransactionType.INCOME,
    });
  }

  openCreateExpense() {
    return this.openTransaction({
      mode: DialogMode.CREATE,
      type: TransactionType.EXPENSE
    })
  }

  openEditTransaction(id:number, type: TransactionType){
    return this.openTransaction({
      mode: DialogMode.EDIT,
      type,
      transactionId:id,
    })
  }
}
