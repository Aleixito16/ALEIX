import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ActionsheetPageRoutingModule } from './actionsheet-routing.module';
import { ActionsheetPage } from './actionsheet.page';
import { RouterModule } from '@angular/router';  
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionsheetPageRoutingModule,
    ComponentsModule,
    RouterModule.forChild([
          {
            path: '',
            component: ActionsheetPage
          }
        ])
      ],
      declarations: [ActionsheetPage]
    })
    export class ActionsheetPageModule {}
  
