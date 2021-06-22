import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './task';

@Component({
  selector: 'app-tasks-block',
  templateUrl: './tasks-block.component.html',
  styleUrls: ['./tasks-block.component.scss']
})
export class TasksBlockComponent implements OnInit {

  Task:any[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/tasks.json').subscribe(
      (data:any) => {this.Task=data["mas"]});
   
  }

}
