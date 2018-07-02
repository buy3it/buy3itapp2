import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contacts = [
    { name:'Training', phone:'088-954-6872'},
    { name:'Support', phone:'088-954-6872'},
    { name:'Costomer Service', phone:'088-954-6872'}
  ]

  constructor(public navCtrl: NavController) {

  }

  showDetail(contact: any){
    console.log(contact);/* 
    this.navCtrl.push("DetailPage", {
      name:contact.name,
      phone:contact.phone,
    }); */
    this.navCtrl.push("DetailPage", {contact});
  }

}
