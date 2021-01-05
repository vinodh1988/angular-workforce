import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {AngmaterialModule} from './angmaterial/angmaterial.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './common/login/login.component';
import { Router } from '@angular/router';
import { AuthInterceptorService } from './services/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngmaterialModule,
    FormsModule
  ],
  providers: [AuthInterceptorService,{
    provide: HTTP_INTERCEPTORS,
    useFactory: function(injector: Injector) {
      return new AuthInterceptorService(injector);
    },
    multi: true,
    deps: [Router]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
