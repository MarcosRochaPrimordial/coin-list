import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Spent } from '../models/spent.model';

@Injectable({
    providedIn: 'root',
})
export class SpentService {

    private APP_STORAGE = 'STORAGE:APP:SPENT';
    public spents$ = new BehaviorSubject<boolean>(true);

    private saveSpents(spents: Spent[]): void {
        localStorage.setItem(this.APP_STORAGE, JSON.stringify(spents));
        setTimeout(() => this.spents$.next(true));
    }

    public getSpents(): Spent[] {
        return JSON.parse(localStorage.getItem(this.APP_STORAGE)) || [];
    }

    public addSpent(spent: Spent) {
        const spents = this.getSpents();
        spent.id = uuidv4();
        spents.splice(0, 0, spent);
        this.saveSpents(spents);
    }

    public markSpent(spentId: string) {
        const spents = this.getSpents()
            .map(spent => {
                if (spent.id === spentId) {
                    spent.marked = !spent.marked;
                }
                return spent;
            });
        this.saveSpents(spents);
    }

    public removeAllMarked() {
        const spents = this.getSpents()
            .filter(spent => !spent.marked);
        this.saveSpents(spents);
    }

}