import { Component } from '@angular/core';
import { SpentFormService } from '../services/spent-form.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private spentFormService: SpentFormService,
  ) { }

  clearForm() {
    this.spentFormService.resetForm();
  }

}
