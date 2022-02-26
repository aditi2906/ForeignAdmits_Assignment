import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TodoListService } from './services/todo-list.service';
import { StorageService } from './services/storage.service';



@NgModule({
  declarations: [
    AppComponent,NavbarComponent,ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,

   
  ],
  providers: [TodoListService,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
