import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { MinhaDiretivaDirective } from './meu-componente/minha-diretiva.directive';
import { MeuPipePipe } from './meu-componente/meu-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    MinhaDiretivaDirective,
    MeuPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
