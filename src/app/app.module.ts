import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseListComponent } from './expenselist/expense-list.component';
import {CategoryListComponent} from './categorylist/category-list.component';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular

@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
