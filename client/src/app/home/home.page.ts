import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastCtrl:ToastController,private router:Router) {

  }


ngOnInit(){

}
  async  onSubmit(username:string,surname:string,password:string,cPassword:string) {
    const details={
      userName:username,
      Surname:surname,
      Password: password,
      Cpassword:cPassword
    }
  if (password!= cPassword) {
  const alert = await this.toastCtrl.create({
    message: 'The password does not match',
    duration: 2000,
    color: "danger"
  });
  await alert.present();

}
    if (username == '' || surname == '' || password == '' || cPassword == '') {
      const alert = await this.toastCtrl.create({
        message: 'Some information is required',
        duration: 2000,
        color: "danger"
      });
      await alert.present();

    }
    {
      const alert = await this.toastCtrl.create({
        message: 'Successfully registered',
        duration: 2000,
        color:"success"
      });
      await alert.present();
      this.router.navigate(['/', 'login']);

    }
 

    
  }



}
