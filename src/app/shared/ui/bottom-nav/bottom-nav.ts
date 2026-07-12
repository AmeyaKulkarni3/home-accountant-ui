import { Component } from '@angular/core';
import { NAVIGATION_ITEMS } from '../../constants/navigation';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-bottom-nav',
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './bottom-nav.html',
  styles: ``,
})
export class BottomNav {
  readonly navigationItems = NAVIGATION_ITEMS;
}
