import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import {Task} from './task';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showform:boolean=false;
  Task:any[]=[];
  done: boolean = false
  Tasks:Task=new Task();
  receivedUser: Task[]=[new Task()];
  myForm: FormGroup;
  constructor(private http: HttpClient) {
    this.myForm= new FormGroup({
      taskname: new FormControl(null),
      category: new FormControl(null)})
  }

  ngOnInit(): void {
  }


  showform1(){
    this.showform=true;
  }
  hideform1(){
    this.showform=false;
  }
  addtask():any{
    const myHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Cache-Control', 'no-cache')
    .set('Connections', 'keep-alive');

    const body={
      thems:this.myForm.value.category,
      name:this.myForm.value.taskname,
      check:false
    };
    return this.http.post("http://localhost:4200/assets/tasks.json",JSON.stringify(body),{headers:myHeaders}).subscribe(
       (data:any) =>{ this.receivedUser=data})
    
  }
  

}
