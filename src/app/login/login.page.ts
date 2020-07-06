import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loginForm : FormGroup;
  private loading: any;

  constructor(private formBuilder: FormBuilder, 
    private auth: AuthService, 
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: [''],
    }); 
  }

  login() {
    this.router.navigate(['/home']); 

    // this.auth.loginFirebase(this.loginForm.value).then(response => {
    //   console.log(response);
    //   this.router.navigate(['/home']); 
    // });
  }

}
