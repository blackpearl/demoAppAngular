import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import {TranslateService} from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

import { Subscription } from 'rxjs/Subscription';

import * as MicrosoftGraph from "@microsoft/microsoft-graph-types";
import { HeaderService } from '../../../@core/data/header.service';

import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  events: MicrosoftGraph.Event[];
  subsGetUsers: Subscription;
  subsGetEvents:  Subscription;
  subsAddContactToExcel: Subscription;
  subsAddEventToExcel: Subscription;
  excelRequestSucceeded: Boolean;

  @Input() position: string = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              public translate: TranslateService,
              public headerService: HeaderService,
            private modalService: NgbModal) 
  {
    translate.addLangs(["en", "ch"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
    this.subsGetEvents = this.headerService.getEvents().subscribe(events => this.events = events);
      
  }
  
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  showLargeModal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Alerts';
    activeModal.componentInstance.modalButton = 'Okay';
  }
  showSmallModal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Important Mails';
    activeModal.componentInstance.modalButton = 'Go To Inbox';
    activeModal.componentInstance.mailevents = this.events;
  }
}
