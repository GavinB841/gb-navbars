import { Input, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gb-sidenav-items',
  template: `
      <div [ngSwitch]="item?.type">
      <button *ngSwitchCase="'link'" type="button" class="list-group-item gb-sidenav-items"
              [routerLink]="item?.path" routerLinkActive="active">
          <i *ngIf="item?.iconClass" [ngClass]="item?.iconClass"></i>
          {{item?.label}}
      </button>
      <h5 *ngSwitchCase="'group'" class="list-group-item gb-sidenav-items">
          <i *ngIf="item?.iconClass" [ngClass]="item?.iconClass"></i> {{item?.label}}
      </h5>
      <gb-sidenav-items *ngFor="let innerItem of item?.items" [item]="innerItem"></gb-sidenav-items>
  </div>
  `,
  styleUrls: ['../gb-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GbSidenavItemsComponent {
  @Input() item: any;

  constructor() {
  }
}
