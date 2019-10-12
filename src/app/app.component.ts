import { Component } from '@angular/core';
declare function require(path: string);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  public hasError=false;
 public imageSrc = require('src/Images/logo.jpg');
 public imageSrc1 = require('src/Images/chota.jpg');
  imageSrc2 = require('src/Images/clouds.jpg');
  imageSrc3 = require('src/Images/gm.jpg');
  imageSrc4 = require('src/Images/logo.jpg');
  imageSrc5 = require('src/Images/logo.jpg');
  imageSrc6 = require('src/Images/logo.jpg');
  mlogo=require('src/images/logo.png');
 public images=["imageSrc","imageSrc1","imageSrc2"];  

  title = 'Umer Abdullah:How to Chill?';
  
  onClick(value){
    if(value=='jani book'){ console.log('welcome jani hahah');
    
  }
    

  }
}
