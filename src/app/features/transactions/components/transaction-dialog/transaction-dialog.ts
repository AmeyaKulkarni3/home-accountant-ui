import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {
  DialogMode,
  TransactionDialogData,
  TransactionType,
} from '../../models/transaction-dialog-data';
import { TransactionForm } from '../transaction-form/transaction-form';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../../../core/services/category-service';
import { Category } from '../../../../core/auth/models/category.model';

@Component({
  selector: 'app-transaction-dialog',
  imports: [MatDialogModule, TransactionForm],
  templateUrl: './transaction-dialog.html',
  styles: ``,
})
export class TransactionDialog implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly categoryService = inject(CategoryService);

  readonly dialogRef = inject(MatDialogRef<TransactionDialog>);
  readonly data = inject<TransactionDialogData>(MAT_DIALOG_DATA);

  protected readonly DialogMode = DialogMode;
  protected readonly TransactionType = TransactionType;

  private categories: Category[] = [];

  ngOnInit(): void {
    this.loadCategories();
  }

  private loadCategories() {
    this.categoryService.getCategories().subscribe((resp) => (this.categories = resp));
  }

  protected get filteredCategories() : Category[] {
    return this.categories.filter(category =>
      category.type === this.data.type
    )
  }

  readonly form = this.fb.nonNullable.group({
    amount: this.fb.nonNullable.control(0, [Validators.required, Validators.min(0.01)]),
    categoryId: this.fb.nonNullable.control(0, [Validators.required]),
    transactionDate: this.fb.nonNullable.control(new Date(), [Validators.required]),
    description: this.fb.nonNullable.control(''),
  });

  protected close(): void {
    this.dialogRef.close();
  }

  protected get title(): string {
    if (this.data.mode === this.DialogMode.EDIT) {
      return 'Edit Transaction';
    }
    return this.data.type === this.TransactionType.INCOME ? 'Add Income' : 'Add Expense';
  }

  protected save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.getRawValue());
  }
}
