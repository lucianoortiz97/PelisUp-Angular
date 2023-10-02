import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from "./layout/layout.module";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardsComponent } from './shared/cards/cards.component';

@NgModule({
    declarations: [
        AppComponent,
        CardsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        LayoutModule
    ]
})
export class AppModule { }
