import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private auth: AuthService,
    private router: Router,
    private toastController: ToastController) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    }); 
  }

  register(){
    this.auth.registerFirebase(this.registerForm.value).then(register => {
      this.router.navigate(['/login']);
      this.presentToast();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Register success',
      duration: 3000
    });
    toast.present();
  }

}
