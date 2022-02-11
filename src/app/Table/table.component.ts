import { Component, Input } from '@angular/core';



@Component({
  selector: 'table-comp',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css']
})
export class TableComponent {
  @Input() book: { id: number, title: string, author: string, genre: string, description: string } = {
    id: 1,
    title: "title umer",
    author: "author s titlom",
    genre: "genre netu",
    description: "lorem"
  };
}

