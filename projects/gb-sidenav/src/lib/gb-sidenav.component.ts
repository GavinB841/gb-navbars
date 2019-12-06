import {
  Input, Component, OnChanges
} from '@angular/core';

@Component({
  selector: 'gb-sidenav',
  template: `
      <aside class="gb-sidenav">
          <nav class="list-group gb-sidenav bg">
              <div *ngFor="let item of navigation">
                  <gb-sidenav-items [item]="item" (onSelect)="goToPage($event)"></gb-sidenav-items>
              </div>
          </nav>
      </aside>
  `,
  styleUrls: ['gb-sidenav.component.scss'],
})
export class GbSidenavComponent implements OnChanges {
  @Input() navigation: any;
  name: string;

  constructor() {	}

  ngOnChanges(changes) {
    if (changes.navigation) {
      this.navigation = changes.navigation.currentValue;
    }
  }

  goToPage({sref, params}) {
    // this.state.go(sref, params);
  }

}
