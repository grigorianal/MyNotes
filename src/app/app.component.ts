import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {LessonsPage} from "../pages/lessons/lessons";
import {WorkPage} from "../pages/work/work";
import {AsapPage} from "../pages/asap/asap";

import {NavController, Platform} from 'ionic-angular';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: NavController;
  rootPage:any = TabsPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  protected openLessons() {
    this.nav.push(LessonsPage)
  }
  protected openWork() {
    this.nav.push(WorkPage)
  }
  public openAsap() {
    this.nav.push(AsapPage)
  }
}
