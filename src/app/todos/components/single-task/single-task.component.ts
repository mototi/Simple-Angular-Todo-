import { Component, Input , Output } from '@angular/core';
import { Task } from 'src/app/model/tasks.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent {

  @Input() task !: Task ;

}
