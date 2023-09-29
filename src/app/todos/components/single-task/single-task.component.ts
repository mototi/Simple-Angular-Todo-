import { Component, Input , Output } from '@angular/core';
import { Task } from 'src/app/model/tasks.model';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent {

  @Input() task !: Task ;

}
