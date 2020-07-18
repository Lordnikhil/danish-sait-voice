import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  subscription: any;
  title: string = "Danish Sait Voice Pack";
  clipsPath: string = "assets/clips/";

  uniqueId: string = "lol";
  clipsData = [
    {
      "name":"aah",
      "file":"aah.mp3"
    },
    {
      "name":"Blooming bugger",
      "file":"blooming_bugger.mp3"
    },
    {
      "name":"fak",
      "file":"fak.mp3"
    },
    {
      "name":"enna uui",
      "file":"enna_uui.mp3"
    },
    {
      "name":"hohue",
      "file":"hohue.mp3"
    },
    {
      "name":"Live and let Live",
      "file":"live_and_let.mp3"
    },
    {
      "name":"Pyari Bakri",
      "file":"pyari_bakri.mp3"
    },
    {
      "name":"Slaam alekum",
      "file":"slaam_alekum.mp3"
    },
    {
      "name":"Thoo",
      "file":"thoo.mp3"
    },
    {
      "name":"What did she say",
      "file":"what_did_she.mp3"
    }

  ]

  constructor(private nativeAudio: NativeAudio, private platform: Platform) {
    this.clipsData.forEach(element => {
      this.nativeAudio.preloadSimple(element.name, this.clipsPath+element.file).then(this.onLoadSuccess, this.onLoadError);  
    });
  }

  ionViewDidEnter(){
    this.subscription = this.platform.backButton.subscribe(()=>{
        navigator['app'].exitApp();
    });
  }

  ionViewWillLeave(){
      this.subscription.unsubscribe();
  }

  playAudio(name){
    this.nativeAudio.play(name, () => {
      // alert('uniqueId1 is done playing');
      // this.nativeAudio.unload(this.uniqueId).then(this.onSuccess,this.onError);
    });
  }

  onLoadSuccess(data){
    console.log(data);
    // alert(data);
    
  }

  onLoadError(data){
    console.log(data);
    // alert(data);
  }

  onSuccess(data){
    console.log(data);
    // alert(data);
  }

  onError(data){
    console.log(data);
    // alert(data);
  }

}
