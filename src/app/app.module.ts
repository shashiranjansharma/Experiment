import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FooterComponent } from './footer/footer.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { MyAnimationComponent } from './my-animation/my-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    FooterComponent,
    DynamicformComponent,
    MyAnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
