import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Spent } from '../models/spent.model';
import { SpentService } from '../services/spent.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'spent.page.html',
  styleUrls: ['spent.page.scss']
})
export class SpentPage implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private spentService: SpentService,
    private router: Router,
    private toast: ToastController,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      amount: ['', [Validators.required]],
      description: ['', [Validators.required]],
      marked: [false],
    });
  }

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
    const spent: Spent = this.form.getRawValue();
    this.spentService.addSpent(spent);
    this.form.reset({
      amount: '',
      description: '',
      marked: false,
    });
    const toast = await this.toast.create({
      message: 'Spent added',
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
}
