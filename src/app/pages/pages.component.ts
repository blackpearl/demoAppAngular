import { Component, OnInit, Input, OnChanges} from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import {TranslateService} from '@ngx-translate/core';
import {TranslateModule, TranslatePipe} from '@ngx-translate/core';
import { LanguageService } from '../@core/data/language.service';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="sidemenu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent{
  @Input() message:string;
  english:string[] = ["Dashboard","FEATURES","Quote","Policy Management","Transactions","Reports","Document Management","Accounting"] 
  chinese:string[] = ["仪表板","特征","引用","政策管理","交易","报告","文件","会计"] 
  constructor(private langService: LanguageService) {
  }
  
  sidemenu = MENU_ITEMS;

  public setMenuName(newVal:string) {
    this.message = newVal
    if (newVal == 'en') {
      var i:number = 0
      for(let menu of MENU_ITEMS) {
        menu.title = this.english[i]
        i++
      }    
    } else {
      var i:number = 0      
      for(let menu of MENU_ITEMS) {
        menu.title = this.chinese[i]
        i++        
      }   
    }

    console.log('printed')
  }
  ngOnInit() {
    this.langService.currentLanguage.subscribe(message => this.setMenuName(message));

  }
  
}

