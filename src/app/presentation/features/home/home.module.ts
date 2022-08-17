import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StoreComponent } from './components/store/store.component';
import { ProjectComponent } from './components/project/project.component';


@NgModule({
  declarations: [
    HomeComponent,
    StoreComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
