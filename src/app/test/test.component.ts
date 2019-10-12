import { Component, OnInit } from '@angular/core';
declare function require(path: string);
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public myid="testID";
 
   
  
  constructor(config: NgbCarouselConfig) {  
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }  
  logMessage(value){console.log(value);}
  ngOnInit() {
  }

}
