import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SagDatatableComponent } from './sag-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [SagDatatableComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    TranslateModule,
    NgSelectModule
  ],
  exports: [ SagDatatableComponent ]
})
export class SagDatatableModule { }
