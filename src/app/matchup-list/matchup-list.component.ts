import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matchup-list',
  templateUrl: './matchup-list.component.html',
  styleUrls: ['./matchup-list.component.css']
})
export class MatchupListComponent implements OnInit {
  @Input() types;

  constructor() { }

  ngOnInit() {
  }

}
