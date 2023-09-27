import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { TodosComponent } from './components/todos/todos.component';


@NgModule({
  declarations: [
    HeaderComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
