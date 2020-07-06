import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;

  constructor(private fAuth: AngularFireAuth, private toastController: ToastController) {
    this.fAuth.authState.subscribe((user)=>(this.isLogged = user));
  }

  public async loginFirebase(userData){
    try{
      return await this.fAuth.signInWithEmailAndPassword(userData.email, userData.password);
    }catch (error) {
      this.presentToast();
    }
  }

  public async registerFirebase(userData){
    try{
      return await this.fAuth.createUserWithEmailAndPassword(userData.email, userData.password);
    }catch (error) {
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Error! check the information',
      duration: 3000
    });
    toast.present();
  }
}
