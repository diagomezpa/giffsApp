import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tags() {
    return this.gifsService.tagHistory;
  }

  searchTag(mitag: string) {
    this.gifsService.searchTag(mitag);
    console.log({ mitag });
  }
}
