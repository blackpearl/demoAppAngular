/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

import { Component } from '@angular/core';

import { AuthService } from '../@core/data/auth.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  // template: `
  //       <p>
  //         <button class="ms-Button" (click)="login()">
  //           <span class="ms-Button-label">Login with your Microsoft account</span>
  //          </button>
  //      </p>
 
  // `
})
export class LoginComponent {
  constructor(public authService: AuthService) {}

  login() {
    this.authService.login();
  }
}
