import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { employeeReducer } from './core/state/employee/employee.reducer';
import { EmployeeComponent } from './employee/employee.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './presentation/layout/layout.module';
import { appEffects, appReducer } from './domain/store';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    LayoutModule,
    StoreModule,
    StoreModule.forRoot({ employee: employeeReducer }, appReducer),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
