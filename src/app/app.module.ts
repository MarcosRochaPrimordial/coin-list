import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpentListPage } from './spent-list/spent-list.page';
import { SpentPage } from './spent/spent.page';
import { TabsPage } from './tabs/tabs.page';

@NgModule({
  declarations: [
    AppComponent,
    TabsPage,
    SpentPage,
    SpentListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    NgxMaskModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
