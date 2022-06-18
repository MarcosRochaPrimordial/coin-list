import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Spent } from '../models/spent.model';
import { SpentFormService } from '../services/spent-form.service';
import { SpentService } from '../services/spent.service';

@Component({
  selector: 'app-spent',
  templateUrl: 'spent.page.html',
  styleUrls: ['spent.page.scss']
})
export class SpentPage {

  get form(): FormGroup {
    return this.spentFormService.form;
  }

  constructor(
    private spentFormService: SpentFormService,
    private spentService: SpentService,
    private toast: ToastController,
  ) { }

  setDecimals() {
    let amount = this.form.get('amount');
    const regex = new RegExp(/,[0-9]{2}/);
    if (!!amount.value && !regex.test(amount.value)) {
      let value = amount.value.replace(',', '.');
      value = parseFloat(value).toFixed(2).replace('.', ',');
      amount.setValue(value);
    }
  }

  async addSpent() {
    const spent: Spent = this.spentFormService.form.getRawValue();
    this.spentService.addSpent(spent);
    this.spentFormService.resetForm();
    const toast = await this.toast.create({
      message: 'Spent added',
      duration: 2000,
      position: 'bottom',
      cssClass: 'toast-wrap'
    });
    toast.present();
  }
}
