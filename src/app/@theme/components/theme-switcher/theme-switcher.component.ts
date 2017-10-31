import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import {TranslateService} from '@ngx-translate/core';
import {TranslateModule, TranslatePipe} from '@ngx-translate/core';
import { LanguageService } from '../../../@core/data/language.service';



@Component({
  selector: 'ngx-theme-switcher',
  styleUrls: ['./theme-switcher.component.scss'],
  template: `
  <select #langSelect (change)="setTranslation(langSelect.value)" class="nb-menu">
  <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
</select>
`
 ,
})
export class ThemeSwitcherComponent implements OnInit {
  theme: NbJSThemeOptions;
  message:string;

  @Output() messageEvent = new EventEmitter<string>()

  constructor(private themeService: NbThemeService, private analyticsService: AnalyticsService,
    public translate: TranslateService, private langService: LanguageService) {
      translate.addLangs(["en", "ch"]);
      translate.setDefaultLang('en');
      this.message = 'en';
  }

  ngOnInit() {
    this.themeService.getJsTheme()
      .subscribe((theme: NbJSThemeOptions) => this.theme = theme);
    this.langService.currentLanguage.subscribe(message => this.message = message)
    const boolTheme = this.boolToTheme(false)
    this.themeService.changeTheme(boolTheme)
    this.analyticsService.trackEvent('switchTheme');
  }

  toggleTheme(theme: boolean) {
    const boolTheme = this.boolToTheme(theme);
    this.themeService.changeTheme(boolTheme);
    this.analyticsService.trackEvent('switchTheme');
  }

  currentBoolTheme() {
    return this.themeToBool(this.theme);
  }

  setTranslation(val: string) {
    this.translate.use(val);
    this.langService.changeLanguage(val);
  }

  private themeToBool(theme: NbJSThemeOptions) {
    return theme.name === 'default';
  }

  private boolToTheme(theme: boolean) {
    return theme ? 'cosmic' : 'default';
  }
}
