import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() {}

  get tagHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagHistory.splice(0, 10);
  }
  public searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);
  }
}
