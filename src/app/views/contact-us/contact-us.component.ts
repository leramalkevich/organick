import {Component, ElementRef, HostListener, inject, ViewChild} from '@angular/core';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PopUpService} from '../../shared/services/pop-up.service';
import {PopUpComponent} from '../../shared/components/pop-up/pop-up.component';

@Component({
  selector: 'contact-us',
  imports: [SubscribeComponent, ReactiveFormsModule, CommonModule, PopUpComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  private fb = inject(FormBuilder);
  userMessageForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+\s*/)]],
    email: ['', [Validators.required, Validators.email]],
    company: ['', Validators.required, Validators.pattern(/^[A-Za-z]+\s*/)],
    subject: ['', Validators.required, Validators.pattern(/^[A-Za-z]+\s*/)],
    text: ['', Validators.required, Validators.pattern(/^[A-Za-z]+\s*/)]
  });
  @ViewChild('userMessage')userMessage:ElementRef|undefined;
  @HostListener('document:click', ['$event'])
  click(event:Event){
    if (!this.userMessage?.nativeElement.contains(event.target)) {
      this.userMessageForm.reset();
      this.userMessageForm.markAsUntouched();
    }
  }
  constructor(private popUpService:PopUpService) {
  }
  sendMessage(){
    if (this.userMessageForm.valid && this.userMessageForm.value.fullName && this.userMessageForm.value.email &&
    this.userMessageForm.value.company && this.userMessageForm.value.subject && this.userMessageForm.value.text) {
      this.userMessageForm.reset();
      this.userMessageForm.markAsUntouched();
      this.popUpService.showPopUp();
    }
  }
}
