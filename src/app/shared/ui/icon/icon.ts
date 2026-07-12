import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
  styles: ``,
})
export class Icon {
  readonly name = input.required<string>();
  readonly className = input('');
}
