import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl ="http://localhost:8080/api/tasks";

  constructor(private httpclient : HttpClient){}

  createTask(newTask : TaskService):Observable<TaskService>{
      return this.httpclient.post<TaskService>(this.apiUrl, newTask)
  }

}
