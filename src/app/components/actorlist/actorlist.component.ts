import { Component, OnInit, ViewChild } from '@angular/core';
import { Actor } from '../../models/actor';
import { MatTable } from '@angular/material';


@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {

  @ViewChild('myTable', {static: true}) myTable: MatTable<any>;
  actorList: Actor[];
  displayedColumns: string[] = ['name', 'city', 'rating', 'actions'];
  dataSource: Actor[];
  selectedIndex: number;
  tempActor: Actor;

  constructor() { }

  ngOnInit() {
    this.actorList = [
      {name: 'Amitabh Bachhan', city: 'Mumbai', rating: 9.8},
      {name: 'Kamal Hasan', city: 'Chennai', rating: 8.5},
      {name: 'Madhuri Dixit', city: 'Delhi', rating: 9.9},
      {name: 'Priyanka Chopra', city: 'Hollywood', rating: 9.0},
      {name: 'Rajnikant', city: 'Chennai', rating: 9.6, country: 'India'}
    ];
    this.dataSource = this.actorList;
    this.selectedIndex = -1;
    this.tempActor = null;
  }

  deleteActor(index) {
    // console.log(index);
    this.actorList.splice(index, 1);
    this.myTable.renderRows();
  }

  addActor(name, city, rating) {
    this.actorList.push({
      name,
      city,
      rating
    });
    this.myTable.renderRows();
  }

  editActor(index: number) {
    this.selectedIndex = index;

    // SHALLOW COPY!!! DON'T DO THIS AT ALL!!
    // this.tempActor = this.actorList[index];

    // SOLUTION - DEEP COPY

    // Approach 1 (Works but not recommended)
    // this.tempActor = {
    //   name: this.actorList[index].name,
    //   city: this.actorList[index].city,
    //   rating: this.actorList[index].rating
    // };

    // Approach 2 (This also works but not recommended)
    // this.tempActor = Object.assign({}, this.actorList[index]);

    // Approach 3 (RECOMMENDED APPROACH)
    this.tempActor = JSON.parse(JSON.stringify(this.actorList[index]));
  }

  saveActor(index: number) {
    this.selectedIndex = -1;
    this.myTable.renderRows();
  }

  cancelEdit(index: number) {
    this.actorList[index] = this.tempActor;
    this.selectedIndex = -1;
    this.myTable.renderRows();
  }

  handleKey(event: KeyboardEvent, index: number) {
    if (event.key === 'Escape') {
      this.cancelEdit(index);
    }
  }
}
