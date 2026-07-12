import { Component, inject } from '@angular/core';
import { FloatingActionButton } from '../../shared/ui/floating-action-button/floating-action-button';
import { BottomNav } from '../../shared/ui/bottom-nav/bottom-nav';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TransactionDialog } from '../../features/transactions/components/transaction-dialog/transaction-dialog';
import { DialogService } from '../../core/services/dialog-service';

@Component({
  selector: 'app-app-shell-component',
  imports: [RouterOutlet, FloatingActionButton, BottomNav],
  templateUrl: './app-shell-component.html',
  styles: ``,
})
export class AppShellComponent {
  private readonly dialogService = inject(DialogService);

  protected onAddIncome(): void {
    this.dialogService.openCreateIncome();
  }

  protected onAddExpense(): void {
    this.dialogService.openCreateExpense();
  }
}
