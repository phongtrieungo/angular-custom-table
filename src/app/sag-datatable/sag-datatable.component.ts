import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { ColumnType } from './models/column-type';
import { TranslateService } from '@ngx-translate/core';

/**
 * @param headers The header of table as object
 * @param rows The data of table
 * @param theme Theme for table
 * @param haveFilterColumns Indicate if the table has extra header row for filtering
 *
 * The component will display data as table form
 */
@Component({
  selector: 'app-sag-datatable',
  templateUrl: './sag-datatable.component.html',
  styleUrls: ['./sag-datatable.component.scss']
})
export class SagDatatableComponent implements OnInit {
    @ViewChild('headerTmpl', { static: true }) headerTmpl: TemplateRef<any>;
    @ViewChild('filterTmpl', { static: true }) filterTmpl: TemplateRef<any>;

    @Input() headers: ColumnType[];
    @Input() rows = [];
    @Input() theme = 'dark';
    @Input() haveFilterColumns: boolean;

    constructor(private translateService: TranslateService) { }

    ngOnInit() {
        this.translateService.setDefaultLang('de');
        this.headers = this.headers.map(header => ({...header, headerTemplate: this.headerTmpl}));
    }

}
