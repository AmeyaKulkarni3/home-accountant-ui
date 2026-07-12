import { Component } from '@angular/core';
import { PageHeader } from '../../../shared/ui/page-header/page-header';
import { StatCard } from '../../../shared/ui/stat-card/stat-card';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-component',
  imports: [PageHeader, StatCard],
  templateUrl: './dashboard-component.html',
  styles: ``,
})
export class DashboardComponent {

  readonly balance = 53000;
  readonly expense = 28000;
  readonly income = 71000;
}
