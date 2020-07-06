import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loginForm : FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private auth: AuthService, 
    private router: Router,
    private toastController: ToastController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    }); 
  }

  login() {
    this.auth.loginFirebase(this.loginForm.value).then(response => {
      this.router.navigate(['/home']); 
      this.presentToast();
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Log in success',
      duration: 3000
    });
    toast.present();
  }

}
