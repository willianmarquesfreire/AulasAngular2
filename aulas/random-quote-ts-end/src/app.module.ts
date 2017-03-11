import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuoteService } from './quote.service';
import { RandomQuoteComponent } from './random-quote.component';
import { AppComponent } from './app.component';
import { TabuadaService } from './tabuada.service';
import { TabuadaComponent } from './tabuada.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, RandomQuoteComponent, TabuadaComponent],
  providers: [QuoteService, TabuadaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
