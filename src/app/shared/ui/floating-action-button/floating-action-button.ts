import { Component, output} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-floating-action-button',
  imports: [MatButtonModule, MatMenuModule, Icon],
  templateUrl: './floating-action-button.html',
  styles: ``,
})
export class FloatingActionButton {
  readonly addIncome = output<void>();
  readonly addExpense = output<void>();
}
