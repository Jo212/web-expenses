import { Component } from '@angular/core';
import { CategoryListComponent } from '../categorylist/category-list.component';
import { Expense} from '../models/Expense'
import a from 'src/api/expenses/expenses.json';
import { Guid } from "guid-typescript";
@Component({ 
    selector: 'pm-expenses',
    templateUrl: './expense-list.component.html'
}
)
export class ExpenseListComponent
{   
/**
 *
 */
constructor() {
    this.expenses = a;
    this.createNewExpenseObject();
    this.expenses.forEach((keys : any, vals :any)=>
    {
        console.log(keys.amount);  
        this.currExp.monthTotal = this.currExp.monthTotal + keys.amount;
        this.monthTotal = this.currExp.monthTotal + keys.amount;
    });

    // });
}
    pageTitle: string = 'Expense List';
    imageWidth: number =30;
    imageMargin: number = 2;
    showImage: boolean = false;
    categoryChosen: string;
    currExp: Expense;
    monthTotal: number = 0;
    expenses: any[]=a;
    categories: any[]=
    [
        {
            "categoryId": 1,
            "categoryName": "Food",
            "description": "Leaf rake with 48-inch wooden handle.",
            "expenses":[]
        },
        {
            "categoryId": 2,
            "categoryName": "Clothes",
            "description": "Leaf rake with 48-inch wooden handle.",
            "expenses":[]
        },
        {
            "categoryId": 3,
            "categoryName": "Electricity",
            "description": "Leaf rake with 48-inch wooden handle.",
            "expenses":[]
        },
        {
            "categoryId": 4,
            "categoryName": "Phone biils",
            "description": "Leaf rake with 48-inch wooden handle.",
            "expenses":[]
        },
        {
            "categoryId": 5,
            "categoryName": "Electronics",
            "description": "Leaf rake with 48-inch wooden handle.", 
            "expenses":[]
        },
        {
            "categoryId": 6,
            "categoryName": "Rent",
            "description": "Leaf rake with 48-inch wooden handle.", 
            "expenses":[]
        },
        {
            "categoryId": 7,
            "categoryName": "Entertainment & Outing",
            "description": "Leaf rake with 48-inch wooden handle.", 
            "expenses":[]
        },  
        {
            "categoryId": 8,
            "categoryName": "Household Utilities",
            "description": "Leaf rake with 48-inch wooden handle.", 
            "expenses":[]
        },
        {
            "categoryId": 9,
            "categoryName": "Savings",
            "description": "Leaf rake with 48-inch wooden handle.", 
            "expenses":[]
        },
        {
            "categoryId": 10,
            "categoryName": "Medical",
            "description": "Leaf rake with 48-inch wooden handle.", 
            "expenses":[]
        }, 
        {
            "categoryId": 11,
            "categoryName": "Misc",
            "description": "Leaf rake with 48-inch wooden handle.", 
            "expenses":[]
        }

    ];
    toggleImage():
    void{
        this.showImage = !this.showImage;
        this.currExp.category = "Food";
    }
   public setCategory(category:string):void
   {
       this.categoryChosen = category;
   }
   removeExpense(expenseId:string):
    void{
        const idx = this.expenses.findIndex(m => m.id === this.currExp.expenseId);
        this.expenses.splice(idx, 1);
    }
selectedCategory(category: string):
void{
    this.categoryChosen = category;
}
    addExpense():
    void{
        this.expenses.push(this.currExp);
        this.monthTotal =  (this.monthTotal  + this.currExp.amount);
        this.createNewExpenseObject();
    }
    createNewExpenseObject():
    Expense{
        this.currExp =  new Expense();
        this.currExp.category = "Food";
        this.currExp.description="";
        this.currExp.expenseId=Guid.create();;
        this.currExp.expenseName="Fruits";
        this.currExp.amount=0;
        this.currExp.day =4;
        this.currExp.month="May";
        this.currExp.year = 2020;
        this.currExp.monthTotal =0;
        return this.currExp;
    }
    saveExpense():
    void{
        var json = JSON.stringify(this.expenses);
        console.log(json);
        var fs = require('src/api/expenses/expenses.json');
        fs.writeFileSync('products.json', json, 'utf8');
    }
}
