import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  imports: [],
  templateUrl: './page-header.html',
  styles: ``,
})
export class PageHeader {
  readonly title = input.required<string>();
  readonly subtitle = input('');
}
