import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StoreComponent } from './components/store/store.component';
import { ProjectComponent } from './components/project/project.component';

import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    HomeComponent,
    StoreComponent,
    ProjectComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgChartsModule,
    MatListModule
  ]
})
export class HomeModule { }
