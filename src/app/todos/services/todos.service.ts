import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterEnum } from 'src/app/model/filterEnum.model';
import { Task } from 'src/app/model/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  tasks = new BehaviorSubject<Task[]>([]);

  filter = new BehaviorSubject<FilterEnum>(FilterEnum.All);

  constructor() { }

  addTask(text: string) {
    const task: Task = {
      id: Math.random().toString(),
      text,
      status: false
    };
    const currentTasks = this.tasks.getValue();
    this.tasks.next([...currentTasks, task]);
  }

  changeStatus(id: string) {
    const currentTasks = this.tasks.getValue();
    const taskIndex = currentTasks.findIndex(task => task.id === id);
    currentTasks[taskIndex].status = !currentTasks[taskIndex].status;
    this.tasks.next([...currentTasks]);
  }

  changeText(id: string, text: string) {
    const currentTasks = this.tasks.getValue();
    const taskIndex = currentTasks.findIndex(task => task.id === id);
    currentTasks[taskIndex].text = text;
    this.tasks.next([...currentTasks]);
    console.log(this.tasks.getValue());

  }

  deleteTask(id: string) {
    const currentTasks = this.tasks.getValue();
    const updatedTasks = currentTasks.filter(task => task.id !== id);
    this.tasks.next(updatedTasks);
  }

}
