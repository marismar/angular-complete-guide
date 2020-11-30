import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() selectPage = new EventEmitter<string>();
  page = 'recipes';

  constructor() {}

  ngOnInit(): void {}

  onRecipesPage(): void {
    this.page = 'recipes';
    this.selectPage.emit('recipes');
  }

  onShoppingPage(): void {
    this.page = 'shopping';
    this.selectPage.emit('shopping');
  }
}
