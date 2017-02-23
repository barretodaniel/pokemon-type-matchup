import { Component, OnInit } from '@angular/core';
import { Type } from './shared/type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selected: Type[];

  ngOnInit() {
    this.selected = [];
  }

  onTypeSelected(event) {
    this.selected = [...event];
  }
}
