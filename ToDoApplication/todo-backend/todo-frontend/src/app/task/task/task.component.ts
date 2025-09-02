import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskService } from '../taskservice';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class TaskComponent {
    constructor(private taskservice : TaskService){}

    newTask:Task = {description:"", completed:false}  //initial data
    createTask():void{  //function
       // this.taskservice.createTask(this.newTask)
    }
}
