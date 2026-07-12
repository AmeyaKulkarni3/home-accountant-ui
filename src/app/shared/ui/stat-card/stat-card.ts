import { Component, input } from '@angular/core';
import { Icon } from "../icon/icon";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  imports: [Icon, CurrencyPipe],
  templateUrl: './stat-card.html',
  styles: ``,
})
export class StatCard {
  readonly title = input.required<string>();
  readonly value = input.required<number>();
  readonly icon = input.required<string>();
  readonly iconColor = input('text-primary');
}
