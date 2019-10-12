import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChuttyeListComponent } from './chuttye-list/chuttye-list.component';
import { AboutusListComponent } from './aboutus-list/aboutus-list.component';
  import { MemoriesListComponent } from './memories-list/memories-list.component';
  import { SigninListComponent } from './signin-list/signin-list.component';
  import { JaniComponent } from './jani/jani.component';
import{SohailaComponent}from  './sohaila/sohaila.component';
import{SaruComponent}from  './saru/saru.component';
import{MolviComponent} from './molvi/molvi.component';
import{BhiComponent}from './bhi/bhi.component';
import{MotaComponent}from './mota/mota.component';
import{QasimComponent}from './qasim/qasim.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
{path:'chuttye',component:ChuttyeListComponent},
  {path:'jani',component:JaniComponent},
  {path:'sohail',component:SohailaComponent},
  {path:'saru',component:SaruComponent},
  {path:'molvie',component:MolviComponent},
  {path:'bhi',component:BhiComponent},
  {path:'mota',component:MotaComponent},
  {path:'qasim',component:QasimComponent},
{path:'aboutus',component:AboutusListComponent},
 {path:'memories',component:MemoriesListComponent},
  {path:'signin',component:SigninListComponent},
  {path:'test',component:TestComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[ChuttyeListComponent,
                                AboutusListComponent,
                                MemoriesListComponent,
                                SigninListComponent,
                                JaniComponent ,
                                SohailaComponent,
                                SaruComponent,BhiComponent,
                                MolviComponent,
                                MotaComponent,
                                QasimComponent,                    
                                TestComponent ];