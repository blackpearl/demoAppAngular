import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import { MatCheckboxModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material';

import {ReactiveFormsModule} from '@angular/forms';

import { ModalComponent } from './form-inputs/modal/modal.component';
import { MatListModule } from '@angular/material';


@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatListModule,
  ],
  declarations: [
    ...routedComponents,
    ModalComponent,
  ],
  entryComponents: [
    ModalComponent,
  ],
})
export class FormsModule { }
