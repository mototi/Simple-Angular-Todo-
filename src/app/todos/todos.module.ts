import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { TodosComponent } from './components/todos/todos.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from './services/todos.service';
import { MainComponent } from './components/main/main.component';
import { SingleTaskComponent } from './components/single-task/single-task.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    HeaderComponent,
    TodosComponent,
    MainComponent,
    SingleTaskComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
  ],
  providers: [TodosService]
})
export class TodosModule { }
