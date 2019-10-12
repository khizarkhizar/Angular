import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-signin-list',
  templateUrl: './sigin-list.html',
  styles: []
})
export class SigninListComponent implements OnInit {
public va;
  constructor() { }

  ngOnInit() {
  }
 OnClick(value){if (value==''){
   console.log("value");
  this.va=false;}

 }
}
