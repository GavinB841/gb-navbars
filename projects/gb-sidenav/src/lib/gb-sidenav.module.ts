import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GbSidenavComponent } from './gb-sidenav.component';
import { GbSidenavItemsComponent } from './sidenav-items/gb-sidenav-items.component';

@NgModule({
  declarations: [
    GbSidenavComponent,
    GbSidenavItemsComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    GbSidenavComponent,
    GbSidenavItemsComponent
  ]
})
export class GbSidenavModule { }
