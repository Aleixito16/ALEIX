import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AlertPageRoutingModule } from './alert-routing.module';
import { AlertPage } from './alert.page';
import { RouterModule } from '@angular/router';  


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertPageRoutingModule,
    RouterModule.forChild([
          {
            path: '',
            component: AlertPage
          }
        ])
      ],
      declarations: [AlertPage]
    })
    export class AlertPageModule {}
