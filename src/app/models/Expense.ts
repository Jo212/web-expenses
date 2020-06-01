import { Guid } from "guid-typescript";

export class Person
{
    name: string;
    expenses: Expense[];
}

export class Expense{
    expenseId: Guid;
    expenseName: string;
    category:string;
    releaseDate:string;
    description:string;
    amount: number=0;
    day:number;
    month:string;
    year:number;
    monthTotal:number;
   }