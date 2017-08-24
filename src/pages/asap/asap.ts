import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage} from "../home/home";

import { Calendar } from '@ionic-native/calendar';


@IonicPage()
@Component({
  selector: 'page-asap',
  templateUrl: 'asap.html',
})

export class AsapPage {


  public name: string;

  constructor(public navCtrl: NavController, public  navParams: NavParams, public storage: Storage, private calendar: Calendar) {
    console.log("Constructor " + name);

    this.storage.set('name', name);
    //this.poxos1Data(){
    // Or to get a key/value pair

  }

  myCalendar() {
    console.log('Open calendar')
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => {
        console.log(msg);
      },
      (err) => {
        console.log(err);
      }
    )
  }
  poxosData(data) {
    // console.log(data.name)


    this.storage.set("name", data.name);

    //// mortant Model object and get "note" value from JSON
    this.poxos1Data();
  }


  poxos1Data():string{
    this.storage.get("name").then(value =>(console.log("today you must do",value)) )
    return name;
  }
 goToHomePage() {
  this.navCtrl.push(HomePage);
  }


}
//public arjeq:string =this.poxos1Data(Data);



