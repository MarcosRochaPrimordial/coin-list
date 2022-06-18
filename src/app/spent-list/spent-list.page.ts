import { Component, OnInit } from '@angular/core';
import { Spent } from '../models/spent.model';
import { SpentService } from '../services/spent.service';

@Component({
  selector: 'app-spent-list',
  templateUrl: 'spent-list.page.html',
  styleUrls: ['spent-list.page.scss']
})
export class SpentListPage implements OnInit {

  spents: Spent[] = [];

  constructor(
    private spentService: SpentService,
  ) { }

  ngOnInit(): void {
    this.spentService
      .spents$
      .subscribe(_ => this.spents = this.spentService.getSpents());
  }

  removeSpent(spentId: string) {
    this.spentService.removeSpent(spentId);
  }

  markSpent(spentId: string) {
    this.spentService.markSpent(spentId);
  }

}
