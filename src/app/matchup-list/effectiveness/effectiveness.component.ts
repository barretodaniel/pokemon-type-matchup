import { Component, OnInit, Input } from '@angular/core';

import { Type } from '../../shared/type';

@Component({
  selector: 'app-effectiveness',
  templateUrl: './effectiveness.component.html',
  styleUrls: ['./effectiveness.component.css']
})
export class EffectivenessComponent implements OnInit {
  @Input() title: string;
  @Input() types: Type[];

  ngOnInit() {
  }

}
