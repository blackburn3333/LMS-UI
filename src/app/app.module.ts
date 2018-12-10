import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {StudenstComponent} from './studenst/studenst.component';
import {BooksComponent} from './books/books.component';

import {RouterModule} from '@angular/router';
import {BookborrowandreturnComponent} from './bookborrowandreturn/bookborrowandreturn.component';
import { OverduebooksComponent } from './overduebooks/overduebooks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StudenstComponent,
    BooksComponent,
    BookborrowandreturnComponent,
    OverduebooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        {path: '', redirectTo: 'members', pathMatch: 'full'},
        {path: 'members', component: StudenstComponent},
        {path: 'books', component: BooksComponent},
        {path: 'borrowandreturn', component: BookborrowandreturnComponent},
        {path: 'overduebooks', component: OverduebooksComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
