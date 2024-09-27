import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BooksComponent } from './component/books/books.component';
import { CardsComponent } from './component/cards/cards.component';

export const routes: Routes = [
    {path:'autor',component:HomeComponent},
    {path:'books',component:BooksComponent},
    {path:'personajes',component:CardsComponent}
];
