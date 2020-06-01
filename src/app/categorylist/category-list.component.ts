import { Component } from '@angular/core';
import { ExpenseListComponent } from '../expenselist/expense-list.component';

@Component({ 
    selector: 'pm-categories',
    templateUrl: './category-list.component.html'
}

)
export class CategoryListComponent
{
    private observer :  ExpenseListComponent;

    public Attach(observer: ExpenseListComponent)
    { 
        this.observer  = observer;
    }
    pageTitle: string = 'Category List';
    showImage: boolean = false;
   
  
}