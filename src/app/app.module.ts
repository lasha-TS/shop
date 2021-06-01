import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './menu/main/main.component';
import { ManComponent } from './menu/man/man.component';
import { WomanComponent } from './menu/woman/woman.component';
import { ChildComponent } from './menu/child/child.component';
import { AboutComponent } from './menu/about/about.component';
import { PageNotFoundComponent } from './menu/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ManComponent,
    WomanComponent,
    ChildComponent,
    AboutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
