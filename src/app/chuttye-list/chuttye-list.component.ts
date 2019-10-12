import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import{ActivatedRoute,Router } from '@angular/router'
declare function require(path: string);
@Component({
  selector: 'app-chuttye-list',
  templateUrl:"./chuttye-list.component.html",
  styleUrls: ['./chuttye-list.component.css']
})

export class ChuttyeListComponent implements OnInit {
  public dat=[];
  public da=['logo.jpg','sohaila.png','msaru.jpg','chota.jpg','gm.jpg','mota.jpg','qasim.jpg','roshi.jpg'];
 
  public imageSrc0= require('src/Images/logo.jpg');
  public imageSrc1 = require('src/Images/sohaila.png');
  public imageSrc2 = require('src/Images/msaru.jpg');
  public imageSrc3 = require('src/Images/chota.jpg');
  public imageSrc4 = require('src/Images/gm.jpg');
  public imageSrc5 = require('src/Images/mota.jpg');
  public imageSrc6 = require('src/Images/qasim.jpg');
  public imageSrc7 = require('src/Images/roshi.jpg');
  public imageSrc8 = require('src/Images/gm.jpg');

  constructor(private _dataService:ServiceService,private router :Router,private route:ActivatedRoute) { }
 
  ngOnInit() { this._dataService.getdata()
    .subscribe(data=>this.dat=data);
  }
//   onSelect(department)
//   {this.router.navigate(['/aboutus',department.id]);}
 
jani(){this.router.navigate(['jani'],{relativeTo:this.route});}
}
