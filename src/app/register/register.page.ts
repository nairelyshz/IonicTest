import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    console.log("*****************");
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    }); 
  }

  register(){
    console.log("QUE PASA");
    console.log(this.registerForm.value);
    this.auth.registerFirebase(this.registerForm.value).then(register => {
      console.log(register);
    });
  }

}
