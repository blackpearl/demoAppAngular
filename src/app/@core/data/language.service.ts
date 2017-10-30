import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

let counter = 0;

@Injectable()
export class LanguageService {

    private userLanguage =  new BehaviorSubject<string>('en');
    currentLanguage = this.userLanguage.asObservable();

    constructor() {}

    changeLanguage(lang: string) {
        this.userLanguage.next(lang)
    }

}
