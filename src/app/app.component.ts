import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SpentService } from './services/spent.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  deleteButton: boolean = false;

  constructor(
    private router: Router,
    private spentService: SpentService,
  ) { }

  ngOnInit(): void {
    this.router
      .events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => this.deleteButton = event['url'] === '/spent-list');
  }

  removeAllMarked() {
    this.spentService.removeAllMarked();
  }
}
