import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

    constructor(private taskservice : TaskService){}

    newTask:Task = {description:"" , completed : false}

    createTask():void{
      this.taskservice.createTask(this.newTask).subscribe((createdTask) =>{
        this.newTask ={description:"",completed:false}; //reset task
      })
    }

}
