import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {SharedModule} from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'organick';
}
