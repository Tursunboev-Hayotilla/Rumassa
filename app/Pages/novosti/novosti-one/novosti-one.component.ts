import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../../Interfaces/card-model';
import { NovostiService } from '../novosti.service';

@Component({
  selector: 'app-novosti-one',
  templateUrl: './novosti-one.component.html',
  styleUrl: './novosti-one.component.scss'
})
export class NovostiOneComponent implements OnInit{
  constructor(private novostiService: NovostiService) { }
  cards !: CardModel[];
  pageIndex: number = 1;
  size: number = 12;

  ngOnInit(): void {
    this.getAll(this.pageIndex, this.size);
  }

  previousPage(): void {
    if (this.pageIndex >= 12){
      this.pageIndex -= 12;
    }
    this.getAll(this.pageIndex, this.size);
  }

  nextPage(): void {
    this.pageIndex += 12;
    this.getAll(this.pageIndex, this.size);
  }

  getAll(pageIndex: number, size: number): void {
    this.novostiService.getAllNews(pageIndex, size).subscribe(
      (data: CardModel[]) => {
        this.cards = data;
        console.log(data)
        console.log(this.cards);
        // this.updateCards();
      },
      (      error: any) => {
        console.error('Error fetching news:', error);
      }
    );
  }
}
