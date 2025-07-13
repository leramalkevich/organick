import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeInput = signal(false);
  header = signal(false);

  constructor() {
  }

  onFocus() {
    this.activeInput.update(value => true);
    this.header.update(value => true);
  }

  onBlur() {
    this.activeInput.update(value => false);
    this.header.update(value => false);
  }
}
