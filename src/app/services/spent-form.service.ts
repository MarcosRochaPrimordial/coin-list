import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root',
})
export class SpentFormService {
    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
    ) {
        this.createForm();
    }

    private createForm() {
        this.form = this.formBuilder.group({
            amount: ['', [Validators.required]],
            description: ['', [Validators.required]],
            marked: [false],
        });
    }

    public resetForm() {
        this.form.reset({
            amount: '',
            description: '',
            marked: false,
        });
    }
}