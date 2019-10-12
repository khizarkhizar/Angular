import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jani',
  template: `
      
<div class="jumbotron jumbotron-fluid" ng-app="">
<div class="container">
  <div class=".logo" >Book of Jani is </div>

   
<h2>Here are some links to help you to contect body of book: </h2>
<ul>
<h2><a  target="_blank" rel="noopener" href="https://www.facebook.com/profile.php?id=100009969547979">Jani's Profile hahah</a></h2>



<h2>Aurther's Profile</h2>
<li>
<h2><a target="_blank" rel="noopener" href="https://www.facebook.com/hamza.sohail.69">Hamza Sohail</a></h2>
</li>
<li>
<h2><a target="_blank" rel="noopener" href="https://www.facebook.com/rana.khizar.3766">Khizar Hayyat</a></h2>
</li>
</ul>

</div>
</div>

  `,
  styles: []
})
export class JaniComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
