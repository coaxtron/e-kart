import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-p-tile',
  templateUrl: './p-tile.component.html',
  styleUrls: ['./p-tile.component.scss']
})
export class PTileComponent implements OnInit {
  @Input() inStock : boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
