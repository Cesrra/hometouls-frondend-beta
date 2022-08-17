import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './presentation/layout/layout.module';
import { appEffects, appReducer } from './domain/store';
import { AppInterceptorService } from './core/interceptors/app.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
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
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
