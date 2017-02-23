import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Type, MoveType } from '../shared/type';
import { TypeDataService } from '../shared/type-data.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  public types: Observable<Type[]>;
  private selected: Type[];
  @Output() typeSelected = new EventEmitter<Type[]>();

  constructor(private TypeDataService: TypeDataService) { }

  ngOnInit() {
    this.selected = [];
    this.types = this.getTypes();
  }

  getTypes() {
    return this.TypeDataService.getTypes();
  }

  onTypeSelect(type: Type) {
    // const typeIndex = this.selected.indexOf(type);

    // if (typeIndex > -1) {
    //   type.active = false;
    //   this.selected.splice(typeIndex, 1);
    // } else if (this.selected.length < 2) {
    //   type.active = true;
    //   this.selected.push(type);
    // } else {
    //   this.selected[1].active = false;
    //   type.active = true;
    //   this.selected.splice(1, 1, type);
    // }
    type.active = true;
    if (this.selected.length) {
      this.selected[0].active = false;
      this.selected[0] = type;
    } else {
      this.selected.push(type);
    }

    this.typeSelected.emit(this.selected);
  }

}
