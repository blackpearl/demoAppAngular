import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types";

@Component({
  selector: 'ngx-modal',
  template: `
    <div class="modal-header">
      <span>{{ modalHeader }}</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <table class="table table-hover">
        <thead>
        <tr>
          <th>Subject</th>
          <th>Message</th>
        </tr>
        </thead>
        <tbody>
          <tr *ngFor="let event of mailevents">
            <td class="mdl-data-table__cell--non-numeric">{{event.subject}}</td>
            <td>{{event.bodyPreview}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="closeModal()">{{ modalButton }}</button>
    </div>
  `,
})
export class ModalComponent {

  modalHeader: string;
  mailevents: MicrosoftGraph.Event[];  
  modalButton: string;
  modalContent = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`;

  constructor(private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }
}