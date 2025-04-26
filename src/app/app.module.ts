import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { BearerTokenInterceptor } from './shared/interceptors/bearer-token.interceptor';
import { AppLayoutModule } from './components/layout/app.layout.module';
import { StoreModule } from '@ngrx/store';
import { appRecuders } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffectsArray } from './app.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    RippleModule,
    StyleClassModule,
    HttpClientModule,
    StoreModule.forRoot(appRecuders),
    EffectsModule.forRoot(AppEffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [
    PrimeNGConfig,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: BearerTokenInterceptor,
      multi: true,
    },
    MessageService,
    // AlertService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
