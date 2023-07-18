import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicLayout } from './layouts/public_layout/public.layout';
import { HeaderComponent } from 'src/app/layouts/public_layout/components/header/header.component';
import { FooterComponent } from 'src/app/layouts/public_layout/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayout,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
