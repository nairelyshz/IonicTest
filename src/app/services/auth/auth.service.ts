import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;

  constructor(private fAuth: AngularFireAuth) {
    this.fAuth.authState.subscribe((user)=>(this.isLogged = user));
  }

  public async loginFirebase(userData){
    try{
      return await this.fAuth.signInWithEmailAndPassword(userData.email, userData.password);
    }catch (error) {
      console.log('Error log in ', error);
    }
  }

  public async registerFirebase(userData){
    try{
      return await this.fAuth.createUserWithEmailAndPassword(userData.email, userData.password);
    }catch (error) {
      console.log('Error log in ', error);
    }
  }
}
