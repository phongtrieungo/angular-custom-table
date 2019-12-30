import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SagDatatableComponent } from './sag-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SagDatatableComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    TranslateModule
  ],
  exports: [ SagDatatableComponent ]
})
export class SagDatatableModule { }
