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
    this.reset();
    this.typeMap = new Map();
    this.makeTypeMap();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.reset();
    if (this.types.length) {
      this.setTypes();
    }
  }

  private makeTypeMap() {
    this.TypeDataService.getTypes().subscribe(types => {
      types.forEach(type => this.typeMap.set(type.id, type));
    });
  }

  private reset() {
    this.weaknesses = [];
    this.immunities = [];
    this.resistances = [];
    this.neutrals = [];
  }

  private setTypes() {
    this.typeMap.forEach(type => {
      const combinedMultiplier = this.types.map(selected => {
        let multiplier = 1;

        if (selected.effect.weakness.indexOf(type.id) >= 0) {
          multiplier = 2;
        }

        if (selected.effect.resistant.indexOf(type.id) >= 0) {
          multiplier = 0.5;
        }
        if (selected.effect.immune.indexOf(type.id) >= 0) {
          multiplier = 0;
        }
        if (selected.effect.normal.indexOf(type.id) >= 0) {
          multiplier = 1;
        }

        return multiplier;
      }).reduce((previous, current) => previous * current, 1);

      if (combinedMultiplier >= 2) {
        this.weaknesses.push(type);
      } else if (combinedMultiplier === 1) {
        this.neutrals.push(type);
      } else if (combinedMultiplier < 1 && combinedMultiplier > 0) {
        this.resistances.push(type);
      } else if (combinedMultiplier === 0) {
        this.immunities.push(type);
      }

    });
  }

}
