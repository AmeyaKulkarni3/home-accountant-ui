import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login-component.html',
  styles: ``,
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('googleButton', { static: true })
  googleButton!: ElementRef<HTMLDivElement>;

  private readonly clientId = '';

  constructor(private authService: AuthService) {}

  ngAfterViewInit(): void {
    this.authService.login(this.googleButton.nativeElement);
  }
}
