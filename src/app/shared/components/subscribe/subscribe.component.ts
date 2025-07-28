import {Component, ElementRef, HostListener, inject, ViewChild} from '@angular/core';
import {PopUpComponent} from '../pop-up/pop-up.component';
import {PopUpService} from '../../services/pop-up.service';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'subscribe',
  imports: [PopUpComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent {
  private fb = inject(FormBuilder);
  subscribeForm=this.fb.group({
    email: ['', [Validators.email, Validators.required]]
  });
  @ViewChild('subscribe')subscribe:ElementRef|undefined;
  @HostListener('document:click', ['$event'])
  click(event:Event){
    if (!this.subscribe?.nativeElement.contains(event.target)) {
      this.subscribeForm.reset();
      this.subscribeForm.markAllAsTouched();
    }
  }
  constructor(private popUpService: PopUpService) {
  }

  showPopUp() {
    if (this.subscribeForm.valid && this.subscribeForm.value.email) {
      this.popUpService.showPopUp();
    }
    this.subscribeForm.reset();
    this.subscribeForm.get('email')?.markAsUntouched();
  }
}
