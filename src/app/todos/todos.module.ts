import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { TodosComponent } from './components/todos/todos.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
  ]
})
export class TodosModule { }
