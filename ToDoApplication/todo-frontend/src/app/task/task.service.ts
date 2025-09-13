import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

    private apiUrl ="http://localhost:8080/api/tasks";

    constructor(private httpclient : HttpClient){}

    createTask(newTask : Task) : Observable<Task>{
      return this.httpclient.post<Task>(this.apiUrl,newTask);
    }

    getAllTasks() :Observable<Task[]>{
      return this.httpclient.get<Task[]>(this.apiUrl)
    }

    updateTask(taskId: Number, updatedTask:Task) :Observable<Task>{
      return this.httpclient.put<Task>(this.apiUrl+'/'+taskId,updatedTask)
    }

    deleteTask(taskId: Number){
      return this.httpclient.delete(this.apiUrl+'/'+taskId)
    }
  
}
