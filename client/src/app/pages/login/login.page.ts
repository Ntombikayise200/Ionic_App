import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private toastCtrl:ToastController) { }

  ngOnInit() {
  }
   async onSubmit(username:string,password:string){
    const info={
      userName:username,
      Password:password
    }

    if (username==''|| password==''){
      const alert = await this.toastCtrl.create({
        message: 'Some Information Is Required',
        duration: 2000,
        color: "danger"
      });
      await alert.present();

    }
    
  else{
      const alert = await this.toastCtrl.create({
        message: 'You Are Successfully Login',
        duration: 2000,
        color: "success"
      });
      await alert.present();

    }
  }
  

}
