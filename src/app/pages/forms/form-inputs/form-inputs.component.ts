import { Component } from '@angular/core';

import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import {MatAutocomplete} from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { MatListModule } from '@angular/material';


@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  starRate: number = 2;
  heartRate: number = 4;
  casename : string;
  acchandler: string;
  accexecutive: string;
  date: string;
  email: string;
  contact: string;

  listOfProducts = ['Material Damage', 'Malpractice', 'Business Interuption', 'Liability', 'Fidelity'];
  listOfInsurance = ['Insurer One', 'Insurer Two', 'Insurer Three', 'Insurer Four', 'Insurer Five'];
  

  populate(){
    
    this.casename = this.sampledata.casename;
    this.acchandler = this.sampledata.acchandler;
    this.accexecutive = this.sampledata.accexecutive;
    this.date = this.sampledata.date;
    this.email = this.sampledata.email;
    this.contact = this.sampledata.contact;
  
  }
    
  myEvent(event) {
    console.log("dkfjaskdfjakjsdfkljaskdfjkajdflkjaj");
  }

  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  states: any[] = [
    {
      name: 'Aerospace Client XX',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'Cargo Client ZZ',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Marine Client MM',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Power Client ZZ',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  constructor(private modalService: NgbModal) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(state => state ? this.filterStates(state) : this.states.slice());
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }


  private sampledata = 
    {
      casename : "Aerospace-case11",
      acchandler: "Jett Max",
      accexecutive: "Orion Sema",
      date: "01/01/2018",
      email: "abc@abc.com",
      contact: "999-232-323"
      
    }
    showSmallModal() {
      const activeModal = this.modalService.open(ModalComponent, { size: 'sm', container: 'nb-layout' });
      activeModal.componentInstance.modalHeader = 'Claim Experience Questionnaire';
      activeModal.componentInstance.modalButton = 'Send To Insured';
    }
  
}
