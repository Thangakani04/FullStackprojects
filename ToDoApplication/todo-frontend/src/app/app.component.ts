import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('todo-frontend');
}
