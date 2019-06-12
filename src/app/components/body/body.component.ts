import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  tasks:string[];

  constructor() { }

  ngOnInit() {
    this.tasks = [];
  }
  
  addTask(value) {
    this.tasks.push(value);
    
    return false;
  }
}
