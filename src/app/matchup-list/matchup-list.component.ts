import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TypeDataService } from '../shared/type-data.service';
import { Type } from '../shared/type';

@Component({
  selector: 'app-matchup-list',
  templateUrl: './matchup-list.component.html',
  styleUrls: ['./matchup-list.component.css']
})
export class MatchupListComponent implements OnInit, OnChanges {
  @Input() types: Type[];
  weaknesses: Type[];
  immunities: Type[];
  resistances: Type[];
  neutrals: Type[];
  private typeMap: Map<number, Type>;

  constructor(private TypeDataService: TypeDataService) { }

  ngOnInit() {
    this.weaknesses = [];
    this.immunities = [];
    this.resistances = [];
    this.neutrals = [];
    this.typeMap = new Map();
    this.makeTypeMap();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.setTypes(this.types.length);
  }

  private makeTypeMap() {
    this.TypeDataService.getTypes().subscribe(types => {
      types.forEach(type => {
        this.typeMap.set(type.id, type);
      });
    });
  }

  private setTypes(numTypes: number) {
    switch (numTypes) {
      case 0:
        this.weaknesses = [];
        this.immunities = [];
        this.resistances = [];
        this.neutrals = [];
        break;
      case 1:
        this.weaknesses = this.types[0].effect.weakness.map(id => this.typeMap.get(id));
        this.immunities = this.types[0].effect.immune.map(id => this.typeMap.get(id));
        this.resistances = this.types[0].effect.resistant.map(id => this.typeMap.get(id));
        this.neutrals = this.types[0].effect.normal.map(id => this.typeMap.get(id));
        break;
      case 2:
        break;
      default:
        break;
    }
  }

}
