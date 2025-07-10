import { Component } from '@angular/core';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';

@Component({
  selector: 'app-password-protected',
  imports: [SubscribeComponent],
  templateUrl: './password-protected.component.html',
  styleUrl: './password-protected.component.scss'
})
export class PasswordProtectedComponent {

}
