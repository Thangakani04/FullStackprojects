import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class TaskComponent implements OnInit {

    constructor(private taskservice : TaskService){}

    newTask:Task = {description:"" , completed : false}
    tasks:Task[]=[];
    editingTask:Task|null=null;
    updatedTask: Task= {description:"", completed:false};

    ngOnInit(): void {
        this.getAllTasks();
    }

    createTask():void{
      this.taskservice.createTask(this.newTask).subscribe((createdTask) =>{
        this.newTask ={description:"",completed:false}; //reset task
      })
    }

    getAllTasks(){
      this.taskservice.getAllTasks().subscribe((tasks) => { //we are getting the task related data in this tasks
        this.tasks=tasks;
      })
    }

    editTask(task:Task){
      this.editingTask = task;
      this.updatedTask={...task}; //create a copy for editing
    }

    updateTask():void{
      if(this.editingTask){
        this.taskservice.updateTask(this.editingTask.id!, this.updatedTask)
        .subscribe((result) => {
         const index=  this.tasks.findIndex((task) => task.id == this.editingTask!.id)
         if(index!=-1){
          
         }
        })
      }
    }

}
